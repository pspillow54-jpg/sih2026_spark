export const NER_STATES = [
  "Assam",
  "Arunachal Pradesh",
  "Meghalaya",
  "Sikkim",
  "Manipur",
  "Mizoram",
  "Nagaland",
  "Tripura",
] as const;

export type NerState = (typeof NER_STATES)[number];

export type Terrain = "floodplain" | "valley" | "foothill" | "hills" | "high-hills";

export type DataMode = "live" | "simulation";

export type HazardClass = 0 | 1;

export type IncidentCategory =
  | "Soil Erosion / Loose Topsoil"
  | "Illegal Construction / Slope Undercutting"
  | "Minor Rockfall / Debris Accumulation"
  | "Blocked Drainage"
  | "Visible Ground Cracks";

export type Severity = "low" | "medium" | "high";

export type ReporterRole = "citizen" | "bro" | "sdma";

export type IncidentStatus = "pending" | "verified" | "dismissed";

export const INCIDENT_CATEGORIES: IncidentCategory[] = [
  "Soil Erosion / Loose Topsoil",
  "Illegal Construction / Slope Undercutting",
  "Minor Rockfall / Debris Accumulation",
  "Blocked Drainage",
  "Visible Ground Cracks",
];

export type DistrictSeed = {
  state: NerState;
  name: string;
  lat: number;
  lng: number;
  terrain: Terrain;
};

export type HazardPoint = {
  id: string;
  state: NerState;
  district: string;
  lat: number;
  lng: number;
  terrain: Terrain;
  slope: number;
  rain24: number;
  rain72: number;
  soil: number;
  proba: number;
  hazard: HazardClass;
  boosted: boolean;
  cloudburst: boolean;
};

export type Incident = {
  id: string;
  category: IncidentCategory;
  state: NerState;
  district: string;
  lat: number;
  lng: number;
  severity: Severity;
  notes: string;
  reporterRole: ReporterRole;
  reporterName: string;
  photoDataUrl?: string;
  status: IncidentStatus;
  createdAt: string;
};

export type CloudburstEvent = {
  state: NerState;
  district: string;
  triggeredAt: string;
};

export type SmsDispatch = {
  id: string;
  to: string;
  body: string;
  channel: "mock" | "twilio";
  status: "queued" | "sent" | "failed";
  error?: string;
  at: string;
};

export type AgencyStatus = "synced" | "degraded" | "stale";

export type AgencyFeed = {
  id: string;
  name: string;
  layer: string;
  cadence: string;
  status: AgencyStatus;
  lag: string;
};

export type CorridorStatus = {
  id: string;
  name: string;
  stretch: string;
  districts: string[];
  risk: number;
  tag: "open" | "watch" | "restricted";
};

export type RiverGauge = {
  id: string;
  name: string;
  station: string;
  level: number;
  danger: number;
  unit: string;
  trend: "rising" | "steady" | "falling";
};

export type ModelCard = {
  nEstimators: number;
  maxDepth: number;
  nSamples: number;
  holdoutAccuracy: number;
  importance: { name: string; value: number }[];
};

export type ThreatLevel = "NORMAL" | "WATCH" | "CRITICAL WARNING";
