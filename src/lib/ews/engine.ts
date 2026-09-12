import { clamp, haversineKm } from "@/lib/utils";
import {
  CORRIDOR_DEFS,
  DISTRICTS,
  RIVER_DEFS,
  districtId,
} from "./districts";
import { predictHazard, type FeatureVec } from "./ml";
import type {
  CloudburstEvent,
  CorridorStatus,
  DataMode,
  HazardPoint,
  Incident,
  RiverGauge,
  ThreatLevel,
} from "./types";

const TERRAIN_SLOPE: Record<string, [number, number]> = {
  floodplain: [8, 16],
  valley: [12, 26],
  foothill: [20, 36],
  hills: [28, 48],
  "high-hills": [38, 62],
};

function hash01(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

function baselineFor(id: string, terrain: string) {
  const [lo, hi] = TERRAIN_SLOPE[terrain] ?? [18, 40];
  const u = hash01(id);
  const u2 = hash01(id + ":r");
  const u3 = hash01(id + ":s");
  const slope = lo + (hi - lo) * u;
  const rain24 = 18 + u2 * 55 + (terrain.includes("hill") ? 12 : 0);
  const rain72 = rain24 * (1.8 + u3 * 0.9) + 20;
  const soil = clamp(0.22 + rain72 / 900 + u * 0.15, 0, 0.85);
  return { slope, rain24, rain72, soil };
}

export function liveForcing(tick: number) {
  const phase = (tick % 3600) / 3600;
  const pulse = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2);
  return {
    rain24: 8 + pulse * 22,
    rain72: 14 + pulse * 36,
    soil: 0.04 + pulse * 0.08,
  };
}

export function incidentBoostMap(incidents: Incident[]) {
  const boost: Record<string, number> = {};
  for (const inc of incidents) {
    if (inc.status === "dismissed") continue;
    const id = districtId(inc.state, inc.district);
    const illegal = inc.category.startsWith("Illegal Construction");
    const high = inc.severity === "high";
    if (!high && !illegal) continue;
    let add = 0;
    if (high) add += 0.16;
    if (illegal) add += 0.1;
    if (inc.status === "verified") add += 0.06;
    boost[id] = Math.min(0.48, (boost[id] ?? 0) + add);
  }
  return boost;
}

function nearestBoost(lat: number, lng: number, boosts: Record<string, number>) {
  let extra = 0;
  for (const d of DISTRICTS) {
    const id = districtId(d.state, d.name);
    const b = boosts[id];
    if (!b) continue;
    const km = haversineKm(lat, lng, d.lat, d.lng);
    if (km < 0.5) extra = Math.max(extra, b);
    else if (km < 35) extra = Math.max(extra, b * (1 - km / 35) * 0.65);
  }
  return extra;
}

export type EngineInput = {
  mode: DataMode;
  rain24: number;
  rain72: number;
  soil: number;
  cloudbursts: CloudburstEvent[];
  incidents: Incident[];
  tick: number;
};

export type EngineOutput = {
  points: HazardPoint[];
  highRisk: number;
  threat: ThreatLevel;
  corridors: CorridorStatus[];
  rivers: RiverGauge[];
  runId: number;
};

export function evaluateField(input: EngineInput): EngineOutput {
  const boosts = incidentBoostMap(input.incidents);
  const live = liveForcing(input.tick);
  const cloudSet = new Set(input.cloudbursts.map((c) => districtId(c.state, c.district)));

  const points: HazardPoint[] = DISTRICTS.map((d) => {
    const id = districtId(d.state, d.name);
    const base = baselineFor(id, d.terrain);
    let rain24: number;
    let rain72: number;
    let soil: number;

    if (input.mode === "live") {
      rain24 = base.rain24 + live.rain24;
      rain72 = base.rain72 + live.rain72;
      soil = clamp(base.soil + live.soil, 0, 1);
    } else {
      rain24 = clamp(base.rain24 * (input.rain24 / 48), 0, 300);
      rain72 = clamp(base.rain72 * (input.rain72 / 120), 0, 600);
      soil = clamp(base.soil + (input.soil - 0.42), 0, 1);
    }

    const burst = cloudSet.has(id);
    if (burst) {
      rain24 = Math.min(300, rain24 + 250);
      rain72 = Math.min(600, rain72 + 450);
      soil = 0.99;
    }

    const nb = nearestBoost(d.lat, d.lng, boosts);
    if (nb > 0) {
      soil = clamp(soil + nb, 0, 1);
      rain24 = Math.min(300, rain24 + nb * 80);
      rain72 = Math.min(600, rain72 + nb * 140);
    }

    const x: FeatureVec = [base.slope, rain24, rain72, soil];
    const { proba, hazard } = predictHazard(x);

    return {
      id,
      state: d.state,
      district: d.name,
      lat: d.lat,
      lng: d.lng,
      terrain: d.terrain,
      slope: Math.round(base.slope * 10) / 10,
      rain24: Math.round(rain24 * 10) / 10,
      rain72: Math.round(rain72 * 10) / 10,
      soil: Math.round(soil * 1000) / 1000,
      proba,
      hazard,
      boosted: nb > 0.04,
      cloudburst: burst,
    };
  });

  const highRisk = points.filter((p) => p.hazard === 1).length;
  const maxP = points.reduce((m, p) => Math.max(m, p.proba), 0);
  const hasBurst = cloudSet.size > 0;
  const hasHighIncident = input.incidents.some(
    (i) => i.status !== "dismissed" && i.severity === "high",
  );

  let threat: ThreatLevel = "NORMAL";
  if (hasBurst || highRisk >= 12 || maxP >= 0.82 || hasHighIncident) {
    threat = "CRITICAL WARNING";
  } else if (highRisk >= 5 || maxP >= 0.62) {
    threat = "WATCH";
  }

  const byName = new Map(points.map((p) => [p.district, p]));
  const corridors: CorridorStatus[] = CORRIDOR_DEFS.map((c) => {
    const pts = c.districts.map((name) => byName.get(name)).filter(Boolean) as HazardPoint[];
    const risk =
      pts.length === 0
        ? 0
        : pts.reduce((s, p) => s + p.proba, 0) / pts.length;
    const tag: CorridorStatus["tag"] =
      risk >= 0.55 || pts.some((p) => p.hazard === 1) ? "restricted" : risk >= 0.35 ? "watch" : "open";
    return { id: c.id, name: c.name, stretch: c.stretch, districts: [...c.districts], risk, tag };
  });

  const rivers: RiverGauge[] = RIVER_DEFS.map((r) => {
    const local = points.filter((p) => p.state === r.state);
    const rain =
      local.reduce((s, p) => s + p.rain72, 0) / Math.max(1, local.length);
    const soil =
      local.reduce((s, p) => s + p.soil, 0) / Math.max(1, local.length);
    const frac = clamp(0.42 + (rain / 650) * 0.45 + soil * 0.18, 0.25, 1.05);
    const level = r.danger * frac;
    const trend: RiverGauge["trend"] =
      frac > 0.78 ? "rising" : frac < 0.5 ? "falling" : "steady";
    return {
      id: r.id,
      name: r.name,
      station: r.station,
      level: Math.round(level * 100) / 100,
      danger: r.danger,
      unit: r.unit,
      trend,
    };
  });

  const runId =
    highRisk * 1000 +
    Math.round(maxP * 1000) +
    cloudSet.size * 17 +
    Object.keys(boosts).length * 13;

  return { points, highRisk, threat, corridors, rivers, runId };
}
