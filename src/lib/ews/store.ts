import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  CloudburstEvent,
  DataMode,
  Incident,
  NerState,
  SmsDispatch,
} from "./types";

export type MapViewMode = "gis" | "scatter3d";
export type TabId = "map" | "incidents" | "weather" | "sms";

const DEFAULT_CONTACTS = "+918904405463\n+919880478888";

const SEED_INCIDENTS: Incident[] = [
  {
    id: "inc-seed-1",
    category: "Visible Ground Cracks",
    state: "Sikkim",
    district: "Gangtok",
    lat: 27.3389,
    lng: 88.6065,
    severity: "high",
    notes: "Longitudinal cracks along NH-10 cut slope above Ranipool. BRO notified.",
    reporterRole: "bro",
    reporterName: "BRO Gangtok Det.",
    status: "pending",
    createdAt: "2026-09-12T02:14:00.000Z",
  },
  {
    id: "inc-seed-2",
    category: "Illegal Construction / Slope Undercutting",
    state: "Nagaland",
    district: "Kohima",
    lat: 25.6751,
    lng: 94.1086,
    severity: "high",
    notes: "Hill-cut for retaining wall below dense settlement. Drainage not provided.",
    reporterRole: "sdma",
    reporterName: "NSDMA field desk",
    status: "pending",
    createdAt: "2026-09-12T01:40:00.000Z",
  },
  {
    id: "inc-seed-3",
    category: "Blocked Drainage",
    state: "Meghalaya",
    district: "East Khasi Hills",
    lat: 25.5788,
    lng: 91.8933,
    severity: "medium",
    notes: "Culvert silted on NH-40 approach. Standing water on cut-slope toe.",
    reporterRole: "citizen",
    reporterName: "Shillong ward volunteer",
    status: "pending",
    createdAt: "2026-09-11T23:05:00.000Z",
  },
  {
    id: "inc-seed-4",
    category: "Minor Rockfall / Debris Accumulation",
    state: "Mizoram",
    district: "Aizawl",
    lat: 23.7271,
    lng: 92.7176,
    severity: "low",
    notes: "Fresh debris on inner shoulder, traffic still moving.",
    reporterRole: "citizen",
    reporterName: "Local bus operator",
    status: "verified",
    createdAt: "2026-09-11T18:22:00.000Z",
  },
  {
    id: "inc-seed-5",
    category: "Soil Erosion / Loose Topsoil",
    state: "Arunachal Pradesh",
    district: "Tawang",
    lat: 27.586,
    lng: 91.859,
    severity: "medium",
    notes: "Sheet erosion on exposed cut after overnight drizzle.",
    reporterRole: "sdma",
    reporterName: "DDMA Tawang",
    status: "pending",
    createdAt: "2026-09-11T16:48:00.000Z",
  },
];

type EwsState = {
  tab: TabId;
  mapView: MapViewMode;
  mode: DataMode;
  rain24: number;
  rain72: number;
  soil: number;
  cloudbursts: CloudburstEvent[];
  cloudburstState: NerState;
  cloudburstDistrict: string;
  incidents: Incident[];
  selectedPointId: string | null;
  selectedIncidentId: string | null;
  stateFilter: "all" | NerState;
  hazardFilter: "all" | "high" | "low";
  tick: number;
  smsSid: string;
  smsToken: string;
  smsFrom: string;
  smsContacts: string;
  smsLog: SmsDispatch[];
  smsBusy: boolean;
  hydrated: boolean;

  setTab: (tab: TabId) => void;
  setMapView: (v: MapViewMode) => void;
  setMode: (mode: DataMode) => void;
  setRain24: (n: number) => void;
  setRain72: (n: number) => void;
  setSoil: (n: number) => void;
  setCloudburstTarget: (state: NerState, district: string) => void;
  triggerCloudburst: () => void;
  clearCloudbursts: () => void;
  addIncident: (incident: Incident) => void;
  setIncidentStatus: (id: string, status: Incident["status"]) => void;
  setSelectedPointId: (id: string | null) => void;
  setSelectedIncidentId: (id: string | null) => void;
  setStateFilter: (v: "all" | NerState) => void;
  setHazardFilter: (v: "all" | "high" | "low") => void;
  bumpTick: () => void;
  setSmsSid: (v: string) => void;
  setSmsToken: (v: string) => void;
  setSmsFrom: (v: string) => void;
  setSmsContacts: (v: string) => void;
  pushSmsLog: (rows: SmsDispatch[]) => void;
  setSmsBusy: (v: boolean) => void;
  setHydrated: (v: boolean) => void;
};

export const useEwsStore = create<EwsState>()(
  persist(
    (set, get) => ({
      tab: "map",
      mapView: "gis",
      mode: "live",
      rain24: 48,
      rain72: 120,
      soil: 0.42,
      cloudbursts: [],
      cloudburstState: "Sikkim",
      cloudburstDistrict: "Gangtok",
      incidents: SEED_INCIDENTS,
      selectedPointId: null,
      selectedIncidentId: null,
      stateFilter: "all",
      hazardFilter: "all",
      tick: 0,
      smsSid: "",
      smsToken: "",
      smsFrom: "",
      smsContacts: DEFAULT_CONTACTS,
      smsLog: [],
      smsBusy: false,
      hydrated: false,

      setTab: (tab) => set({ tab }),
      setMapView: (mapView) => set({ mapView }),
      setMode: (mode) => set({ mode }),
      setRain24: (rain24) => set({ rain24, mode: "simulation" }),
      setRain72: (rain72) => set({ rain72, mode: "simulation" }),
      setSoil: (soil) => set({ soil, mode: "simulation" }),
      setCloudburstTarget: (cloudburstState, cloudburstDistrict) =>
        set({ cloudburstState, cloudburstDistrict }),
      triggerCloudburst: () => {
        const { cloudburstState, cloudburstDistrict, cloudbursts } = get();
        const exists = cloudbursts.some(
          (c) => c.state === cloudburstState && c.district === cloudburstDistrict,
        );
        const next = exists
          ? cloudbursts
          : [
              ...cloudbursts,
              {
                state: cloudburstState,
                district: cloudburstDistrict,
                triggeredAt: new Date().toISOString(),
              },
            ];
        set({ cloudbursts: next, mode: "simulation" });
      },
      clearCloudbursts: () => set({ cloudbursts: [] }),
      addIncident: (incident) =>
        set({ incidents: [incident, ...get().incidents] }),
      setIncidentStatus: (id, status) =>
        set({
          incidents: get().incidents.map((i) => (i.id === id ? { ...i, status } : i)),
        }),
      setSelectedPointId: (selectedPointId) => set({ selectedPointId }),
      setSelectedIncidentId: (selectedIncidentId) => set({ selectedIncidentId }),
      setStateFilter: (stateFilter) => set({ stateFilter }),
      setHazardFilter: (hazardFilter) => set({ hazardFilter }),
      bumpTick: () => set({ tick: get().tick + 1 }),
      setSmsSid: (smsSid) => set({ smsSid }),
      setSmsToken: (smsToken) => set({ smsToken }),
      setSmsFrom: (smsFrom) => set({ smsFrom }),
      setSmsContacts: (smsContacts) => set({ smsContacts }),
      pushSmsLog: (rows) => set({ smsLog: [...rows, ...get().smsLog].slice(0, 40) }),
      setSmsBusy: (smsBusy) => set({ smsBusy }),
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "ner-ews-v1",
      skipHydration: true,
      partialize: (s) => ({
        incidents: s.incidents,
        rain24: s.rain24,
        rain72: s.rain72,
        soil: s.soil,
        mode: s.mode,
        cloudbursts: s.cloudbursts,
        smsContacts: s.smsContacts,
        smsLog: s.smsLog,
        mapView: s.mapView,
      }),
    },
  ),
);
