import { slug } from "@/lib/utils";
import type { DistrictSeed, NerState } from "./types";

const RAW: DistrictSeed[] = [
  // Assam — 16
  { state: "Assam", name: "Kamrup Metropolitan", lat: 26.1445, lng: 91.7362, terrain: "valley" },
  { state: "Assam", name: "Dibrugarh", lat: 27.4728, lng: 94.912, terrain: "floodplain" },
  { state: "Assam", name: "Tinsukia", lat: 27.4922, lng: 95.3597, terrain: "foothill" },
  { state: "Assam", name: "Jorhat", lat: 26.7509, lng: 94.2037, terrain: "valley" },
  { state: "Assam", name: "Nagaon", lat: 26.3464, lng: 92.684, terrain: "floodplain" },
  { state: "Assam", name: "Sonitpur", lat: 26.6338, lng: 92.8, terrain: "foothill" },
  { state: "Assam", name: "Cachar", lat: 24.8333, lng: 92.7789, terrain: "valley" },
  { state: "Assam", name: "Goalpara", lat: 26.1667, lng: 90.6264, terrain: "floodplain" },
  { state: "Assam", name: "Karbi Anglong", lat: 26.0, lng: 93.5, terrain: "hills" },
  { state: "Assam", name: "Dima Hasao", lat: 25.3458, lng: 93.0176, terrain: "hills" },
  { state: "Assam", name: "Lakhimpur", lat: 27.2367, lng: 94.1044, terrain: "floodplain" },
  { state: "Assam", name: "Golaghat", lat: 26.5239, lng: 93.9622, terrain: "valley" },
  { state: "Assam", name: "Sivasagar", lat: 26.9844, lng: 94.6378, terrain: "valley" },
  { state: "Assam", name: "Kokrajhar", lat: 26.4014, lng: 90.2661, terrain: "foothill" },
  { state: "Assam", name: "Barpeta", lat: 26.3229, lng: 91.0063, terrain: "floodplain" },
  { state: "Assam", name: "Hailakandi", lat: 24.6844, lng: 92.5642, terrain: "hills" },
  { state: "Assam", name: "Karimganj", lat: 24.8692, lng: 92.3556, terrain: "foothill" },
  { state: "Assam", name: "Dhubri", lat: 26.02, lng: 89.985, terrain: "floodplain" },

  // Arunachal Pradesh — 16
  { state: "Arunachal Pradesh", name: "Papum Pare", lat: 27.0844, lng: 93.6053, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Tawang", lat: 27.586, lng: 91.859, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "West Kameng", lat: 27.265, lng: 92.413, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "East Kameng", lat: 27.273, lng: 93.046, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Lower Subansiri", lat: 27.546, lng: 93.831, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Upper Subansiri", lat: 28.3, lng: 94.05, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "East Siang", lat: 28.066, lng: 95.326, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "West Siang", lat: 28.169, lng: 94.809, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Upper Siang", lat: 28.638, lng: 95.025, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "Lohit", lat: 27.916, lng: 96.166, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Lower Dibang Valley", lat: 28.145, lng: 95.842, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Dibang Valley", lat: 28.796, lng: 95.903, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "Changlang", lat: 27.137, lng: 95.734, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Tirap", lat: 27.023, lng: 95.507, terrain: "hills" },
  { state: "Arunachal Pradesh", name: "Anjaw", lat: 28.0, lng: 96.6, terrain: "high-hills" },
  { state: "Arunachal Pradesh", name: "Namsai", lat: 27.67, lng: 95.86, terrain: "foothill" },

  // Meghalaya — 12
  { state: "Meghalaya", name: "East Khasi Hills", lat: 25.5788, lng: 91.8933, terrain: "hills" },
  { state: "Meghalaya", name: "West Garo Hills", lat: 25.514, lng: 90.202, terrain: "hills" },
  { state: "Meghalaya", name: "West Jaintia Hills", lat: 25.45, lng: 92.2, terrain: "hills" },
  { state: "Meghalaya", name: "West Khasi Hills", lat: 25.517, lng: 91.265, terrain: "hills" },
  { state: "Meghalaya", name: "East Garo Hills", lat: 25.435, lng: 90.618, terrain: "hills" },
  { state: "Meghalaya", name: "South Garo Hills", lat: 25.2, lng: 90.65, terrain: "hills" },
  { state: "Meghalaya", name: "Ri Bhoi", lat: 25.9, lng: 91.88, terrain: "hills" },
  { state: "Meghalaya", name: "East Jaintia Hills", lat: 25.359, lng: 92.367, terrain: "hills" },
  { state: "Meghalaya", name: "South West Khasi Hills", lat: 25.35, lng: 91.2, terrain: "hills" },
  { state: "Meghalaya", name: "North Garo Hills", lat: 25.9, lng: 90.6, terrain: "hills" },
  { state: "Meghalaya", name: "South West Garo Hills", lat: 25.466, lng: 89.933, terrain: "foothill" },
  { state: "Meghalaya", name: "Eastern West Khasi Hills", lat: 25.56, lng: 91.63, terrain: "hills" },

  // Sikkim — 12 monitoring cells (6 official districts + sectors)
  { state: "Sikkim", name: "Gangtok", lat: 27.3389, lng: 88.6065, terrain: "high-hills" },
  { state: "Sikkim", name: "Namchi", lat: 27.166, lng: 88.363, terrain: "hills" },
  { state: "Sikkim", name: "Gyalshing", lat: 27.289, lng: 88.258, terrain: "high-hills" },
  { state: "Sikkim", name: "Mangan", lat: 27.516, lng: 88.533, terrain: "high-hills" },
  { state: "Sikkim", name: "Pakyong", lat: 27.231, lng: 88.594, terrain: "hills" },
  { state: "Sikkim", name: "Soreng", lat: 27.17, lng: 88.2, terrain: "hills" },
  { state: "Sikkim", name: "Rangpo", lat: 27.175, lng: 88.529, terrain: "hills" },
  { state: "Sikkim", name: "Ravangla", lat: 27.307, lng: 88.363, terrain: "high-hills" },
  { state: "Sikkim", name: "Chungthang", lat: 27.604, lng: 88.646, terrain: "high-hills" },
  { state: "Sikkim", name: "Lachen", lat: 27.716, lng: 88.557, terrain: "high-hills" },
  { state: "Sikkim", name: "Pelling", lat: 27.317, lng: 88.243, terrain: "high-hills" },
  { state: "Sikkim", name: "Jorethang", lat: 27.13, lng: 88.323, terrain: "hills" },

  // Manipur — 14
  { state: "Manipur", name: "Imphal West", lat: 24.817, lng: 93.9368, terrain: "valley" },
  { state: "Manipur", name: "Imphal East", lat: 24.78, lng: 93.95, terrain: "valley" },
  { state: "Manipur", name: "Churachandpur", lat: 24.333, lng: 93.683, terrain: "hills" },
  { state: "Manipur", name: "Ukhrul", lat: 25.111, lng: 94.362, terrain: "high-hills" },
  { state: "Manipur", name: "Senapati", lat: 25.272, lng: 94.026, terrain: "hills" },
  { state: "Manipur", name: "Tamenglong", lat: 24.993, lng: 93.496, terrain: "hills" },
  { state: "Manipur", name: "Chandel", lat: 24.327, lng: 94.0, terrain: "hills" },
  { state: "Manipur", name: "Thoubal", lat: 24.634, lng: 94.016, terrain: "valley" },
  { state: "Manipur", name: "Bishnupur", lat: 24.627, lng: 93.778, terrain: "valley" },
  { state: "Manipur", name: "Kangpokpi", lat: 25.15, lng: 93.97, terrain: "hills" },
  { state: "Manipur", name: "Tengnoupal", lat: 24.38, lng: 94.15, terrain: "hills" },
  { state: "Manipur", name: "Pherzawl", lat: 24.25, lng: 93.18, terrain: "hills" },
  { state: "Manipur", name: "Kamjong", lat: 24.85, lng: 94.5, terrain: "high-hills" },
  { state: "Manipur", name: "Noney", lat: 24.85, lng: 93.75, terrain: "hills" },

  // Mizoram — 11
  { state: "Mizoram", name: "Aizawl", lat: 23.7271, lng: 92.7176, terrain: "hills" },
  { state: "Mizoram", name: "Lunglei", lat: 22.88, lng: 92.73, terrain: "hills" },
  { state: "Mizoram", name: "Champhai", lat: 23.456, lng: 93.328, terrain: "hills" },
  { state: "Mizoram", name: "Kolasib", lat: 24.223, lng: 92.678, terrain: "hills" },
  { state: "Mizoram", name: "Serchhip", lat: 23.342, lng: 92.85, terrain: "hills" },
  { state: "Mizoram", name: "Mamit", lat: 23.929, lng: 92.49, terrain: "hills" },
  { state: "Mizoram", name: "Lawngtlai", lat: 22.528, lng: 92.899, terrain: "hills" },
  { state: "Mizoram", name: "Siaha", lat: 22.483, lng: 92.981, terrain: "hills" },
  { state: "Mizoram", name: "Khawzawl", lat: 23.53, lng: 93.18, terrain: "hills" },
  { state: "Mizoram", name: "Hnahthial", lat: 22.97, lng: 92.9, terrain: "hills" },
  { state: "Mizoram", name: "Saitual", lat: 23.68, lng: 92.98, terrain: "hills" },

  // Nagaland — 12
  { state: "Nagaland", name: "Kohima", lat: 25.6751, lng: 94.1086, terrain: "hills" },
  { state: "Nagaland", name: "Dimapur", lat: 25.9044, lng: 93.7267, terrain: "valley" },
  { state: "Nagaland", name: "Mokokchung", lat: 26.322, lng: 94.518, terrain: "hills" },
  { state: "Nagaland", name: "Tuensang", lat: 26.271, lng: 94.824, terrain: "hills" },
  { state: "Nagaland", name: "Wokha", lat: 26.097, lng: 94.258, terrain: "hills" },
  { state: "Nagaland", name: "Zunheboto", lat: 26.011, lng: 94.521, terrain: "hills" },
  { state: "Nagaland", name: "Phek", lat: 25.666, lng: 94.466, terrain: "hills" },
  { state: "Nagaland", name: "Mon", lat: 26.722, lng: 95.023, terrain: "hills" },
  { state: "Nagaland", name: "Kiphire", lat: 25.896, lng: 94.786, terrain: "hills" },
  { state: "Nagaland", name: "Longleng", lat: 26.473, lng: 94.81, terrain: "hills" },
  { state: "Nagaland", name: "Peren", lat: 25.513, lng: 93.737, terrain: "hills" },
  { state: "Nagaland", name: "Noklak", lat: 26.2, lng: 95.0, terrain: "hills" },

  // Tripura — 12
  { state: "Tripura", name: "West Tripura", lat: 23.8315, lng: 91.2868, terrain: "valley" },
  { state: "Tripura", name: "Gomati", lat: 23.533, lng: 91.481, terrain: "foothill" },
  { state: "Tripura", name: "North Tripura", lat: 24.366, lng: 92.168, terrain: "hills" },
  { state: "Tripura", name: "Unakoti", lat: 24.332, lng: 92.004, terrain: "hills" },
  { state: "Tripura", name: "South Tripura", lat: 23.25, lng: 91.45, terrain: "foothill" },
  { state: "Tripura", name: "Dhalai", lat: 23.921, lng: 91.847, terrain: "hills" },
  { state: "Tripura", name: "Khowai", lat: 24.064, lng: 91.605, terrain: "foothill" },
  { state: "Tripura", name: "Sepahijala", lat: 23.67, lng: 91.27, terrain: "valley" },
  { state: "Tripura", name: "Sipahijala Melaghar", lat: 23.5, lng: 91.33, terrain: "valley" },
  { state: "Tripura", name: "Sabroom", lat: 23.001, lng: 91.724, terrain: "foothill" },
  { state: "Tripura", name: "Teliamura", lat: 23.84, lng: 91.63, terrain: "foothill" },
  { state: "Tripura", name: "Kanchanpur", lat: 24.1, lng: 92.2, terrain: "hills" },
];

export const DISTRICTS: DistrictSeed[] = RAW;

export const DISTRICT_COUNT = DISTRICTS.length;

export function districtId(state: NerState, name: string) {
  return `${slug(state)}__${slug(name)}`;
}

export function districtsForState(state: NerState) {
  return DISTRICTS.filter((d) => d.state === state);
}

export function findDistrict(state: NerState, name: string) {
  return DISTRICTS.find((d) => d.state === state && d.name === name);
}

export const STATE_CENTROIDS: Record<NerState, { lat: number; lng: number }> = {
  Assam: { lat: 26.2, lng: 92.9 },
  "Arunachal Pradesh": { lat: 28.2, lng: 94.7 },
  Meghalaya: { lat: 25.5, lng: 91.3 },
  Sikkim: { lat: 27.35, lng: 88.45 },
  Manipur: { lat: 24.8, lng: 93.95 },
  Mizoram: { lat: 23.35, lng: 92.85 },
  Nagaland: { lat: 26.1, lng: 94.5 },
  Tripura: { lat: 23.75, lng: 91.7 },
};

/** Simplified NER outer ring (lon, lat) for the 3D field silhouette. */
export const NER_OUTLINE: [number, number][] = [
  [88.07, 27.14],
  [88.02, 27.74],
  [88.85, 28.13],
  [91.55, 27.86],
  [92.9, 28.85],
  [94.15, 29.45],
  [95.35, 29.35],
  [96.35, 28.55],
  [97.35, 27.72],
  [96.7, 26.25],
  [95.9, 25.18],
  [94.78, 24.15],
  [94.55, 23.05],
  [93.35, 21.95],
  [92.35, 21.95],
  [91.15, 22.85],
  [90.05, 23.7],
  [89.85, 25.2],
  [89.7, 26.15],
  [88.55, 26.55],
  [88.07, 27.14],
];

export const CORRIDOR_DEFS = [
  {
    id: "nh-10",
    name: "NH-10",
    stretch: "Siliguri – Gangtok",
    districts: ["Rangpo", "Gangtok", "Pakyong", "Namchi"],
  },
  {
    id: "nh-40",
    name: "NH-40",
    stretch: "Guwahati – Shillong",
    districts: ["Kamrup Metropolitan", "Ri Bhoi", "East Khasi Hills", "West Jaintia Hills"],
  },
  {
    id: "nh-29",
    name: "NH-29",
    stretch: "Dimapur – Kohima",
    districts: ["Dimapur", "Peren", "Kohima", "Phek"],
  },
  {
    id: "nh-54",
    name: "NH-54",
    stretch: "Kolasib – Aizawl",
    districts: ["Kolasib", "Aizawl", "Serchhip", "Mamit"],
  },
] as const;

export const RIVER_DEFS = [
  { id: "brahmaputra", name: "Brahmaputra", station: "Guwahati (Pandu)", danger: 49.7, unit: "m", state: "Assam" as NerState },
  { id: "teesta", name: "Teesta", station: "Gangtok sector", danger: 4.8, unit: "m", state: "Sikkim" as NerState },
  { id: "barak", name: "Barak", station: "Silchar (Annapurna)", danger: 19.8, unit: "m", state: "Assam" as NerState },
  { id: "subansiri", name: "Subansiri", station: "Gogamukh", danger: 92.4, unit: "m", state: "Arunachal Pradesh" as NerState },
  { id: "umiam", name: "Umiam", station: "Umiam Lake, Ri Bhoi", danger: 981.0, unit: "m", state: "Meghalaya" as NerState },
] as const;
