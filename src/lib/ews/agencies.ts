import type { AgencyFeed, DataMode } from "./types";

const BASE: Omit<AgencyFeed, "status" | "lag">[] = [
  {
    id: "isro",
    name: "ISRO / NRSC Landslide Atlas",
    layer: "Inventory polygons",
    cadence: "Campaign",
  },
  {
    id: "bhuvan",
    name: "Bhuvan Geoportal",
    layer: "Terrain / LULC tiles",
    cadence: "15 min cache",
  },
  {
    id: "s1",
    name: "Copernicus Sentinel-1",
    layer: "InSAR coherence",
    cadence: "12-day pass",
  },
  {
    id: "s2",
    name: "Sentinel-2",
    layer: "Optical 10 m",
    cadence: "5-day",
  },
  {
    id: "gpm",
    name: "NASA GPM IMERG",
    layer: "Half-hourly rain",
    cadence: "30 min",
  },
  {
    id: "imd",
    name: "IMD AWS",
    layer: "Rain gauges / AWS",
    cadence: "15 min",
  },
  {
    id: "gee",
    name: "Google Earth Engine",
    layer: "Fused composites",
    cadence: "On demand",
  },
  {
    id: "hist",
    name: "Historical Inventory",
    layer: "Event catalogue",
    cadence: "Static",
  },
];

export function agencyFeeds(mode: DataMode, tick: number): AgencyFeed[] {
  return BASE.map((a, i) => {
    if (mode === "simulation") {
      return { ...a, status: "synced", lag: "simulation overlay" };
    }
    const wave = (tick + i * 3) % 11;
    const status = a.id === "s2" && wave > 8 ? "degraded" : "synced";
    const minutes = a.cadence.includes("Static") ? 0 : 4 + ((tick + i) % 9);
    return {
      ...a,
      status,
      lag: a.cadence.includes("Static") ? "catalogue" : `${minutes} min ago`,
    };
  });
}
