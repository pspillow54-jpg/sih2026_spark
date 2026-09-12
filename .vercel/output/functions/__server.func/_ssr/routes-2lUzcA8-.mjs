import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as Map$1, i as Radio, n as SquareDashed, o as MapPinned, r as Siren, s as CloudRain } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2lUzcA8-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function clamp(n, min = 0, max = 1) {
	return Math.min(max, Math.max(min, n));
}
function haversineKm(lat1, lng1, lat2, lng2) {
	const R = 6371;
	const dLat = (lat2 - lat1) * Math.PI / 180;
	const dLng = (lng2 - lng1) * Math.PI / 180;
	const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
	return 2 * R * Math.asin(Math.sqrt(a));
}
function escapeHtml(s) {
	return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function formatIST(date = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("en-IN", {
		timeZone: "Asia/Kolkata",
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	}).format(date);
}
function slug(s) {
	return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
var DISTRICTS = [
	{
		state: "Assam",
		name: "Kamrup Metropolitan",
		lat: 26.1445,
		lng: 91.7362,
		terrain: "valley"
	},
	{
		state: "Assam",
		name: "Dibrugarh",
		lat: 27.4728,
		lng: 94.912,
		terrain: "floodplain"
	},
	{
		state: "Assam",
		name: "Tinsukia",
		lat: 27.4922,
		lng: 95.3597,
		terrain: "foothill"
	},
	{
		state: "Assam",
		name: "Jorhat",
		lat: 26.7509,
		lng: 94.2037,
		terrain: "valley"
	},
	{
		state: "Assam",
		name: "Nagaon",
		lat: 26.3464,
		lng: 92.684,
		terrain: "floodplain"
	},
	{
		state: "Assam",
		name: "Sonitpur",
		lat: 26.6338,
		lng: 92.8,
		terrain: "foothill"
	},
	{
		state: "Assam",
		name: "Cachar",
		lat: 24.8333,
		lng: 92.7789,
		terrain: "valley"
	},
	{
		state: "Assam",
		name: "Goalpara",
		lat: 26.1667,
		lng: 90.6264,
		terrain: "floodplain"
	},
	{
		state: "Assam",
		name: "Karbi Anglong",
		lat: 26,
		lng: 93.5,
		terrain: "hills"
	},
	{
		state: "Assam",
		name: "Dima Hasao",
		lat: 25.3458,
		lng: 93.0176,
		terrain: "hills"
	},
	{
		state: "Assam",
		name: "Lakhimpur",
		lat: 27.2367,
		lng: 94.1044,
		terrain: "floodplain"
	},
	{
		state: "Assam",
		name: "Golaghat",
		lat: 26.5239,
		lng: 93.9622,
		terrain: "valley"
	},
	{
		state: "Assam",
		name: "Sivasagar",
		lat: 26.9844,
		lng: 94.6378,
		terrain: "valley"
	},
	{
		state: "Assam",
		name: "Kokrajhar",
		lat: 26.4014,
		lng: 90.2661,
		terrain: "foothill"
	},
	{
		state: "Assam",
		name: "Barpeta",
		lat: 26.3229,
		lng: 91.0063,
		terrain: "floodplain"
	},
	{
		state: "Assam",
		name: "Hailakandi",
		lat: 24.6844,
		lng: 92.5642,
		terrain: "hills"
	},
	{
		state: "Assam",
		name: "Karimganj",
		lat: 24.8692,
		lng: 92.3556,
		terrain: "foothill"
	},
	{
		state: "Assam",
		name: "Dhubri",
		lat: 26.02,
		lng: 89.985,
		terrain: "floodplain"
	},
	{
		state: "Arunachal Pradesh",
		name: "Papum Pare",
		lat: 27.0844,
		lng: 93.6053,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Tawang",
		lat: 27.586,
		lng: 91.859,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "West Kameng",
		lat: 27.265,
		lng: 92.413,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "East Kameng",
		lat: 27.273,
		lng: 93.046,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Lower Subansiri",
		lat: 27.546,
		lng: 93.831,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Upper Subansiri",
		lat: 28.3,
		lng: 94.05,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "East Siang",
		lat: 28.066,
		lng: 95.326,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "West Siang",
		lat: 28.169,
		lng: 94.809,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Upper Siang",
		lat: 28.638,
		lng: 95.025,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Lohit",
		lat: 27.916,
		lng: 96.166,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Lower Dibang Valley",
		lat: 28.145,
		lng: 95.842,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Dibang Valley",
		lat: 28.796,
		lng: 95.903,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Changlang",
		lat: 27.137,
		lng: 95.734,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Tirap",
		lat: 27.023,
		lng: 95.507,
		terrain: "hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Anjaw",
		lat: 28,
		lng: 96.6,
		terrain: "high-hills"
	},
	{
		state: "Arunachal Pradesh",
		name: "Namsai",
		lat: 27.67,
		lng: 95.86,
		terrain: "foothill"
	},
	{
		state: "Meghalaya",
		name: "East Khasi Hills",
		lat: 25.5788,
		lng: 91.8933,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "West Garo Hills",
		lat: 25.514,
		lng: 90.202,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "West Jaintia Hills",
		lat: 25.45,
		lng: 92.2,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "West Khasi Hills",
		lat: 25.517,
		lng: 91.265,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "East Garo Hills",
		lat: 25.435,
		lng: 90.618,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "South Garo Hills",
		lat: 25.2,
		lng: 90.65,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "Ri Bhoi",
		lat: 25.9,
		lng: 91.88,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "East Jaintia Hills",
		lat: 25.359,
		lng: 92.367,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "South West Khasi Hills",
		lat: 25.35,
		lng: 91.2,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "North Garo Hills",
		lat: 25.9,
		lng: 90.6,
		terrain: "hills"
	},
	{
		state: "Meghalaya",
		name: "South West Garo Hills",
		lat: 25.466,
		lng: 89.933,
		terrain: "foothill"
	},
	{
		state: "Meghalaya",
		name: "Eastern West Khasi Hills",
		lat: 25.56,
		lng: 91.63,
		terrain: "hills"
	},
	{
		state: "Sikkim",
		name: "Gangtok",
		lat: 27.3389,
		lng: 88.6065,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Namchi",
		lat: 27.166,
		lng: 88.363,
		terrain: "hills"
	},
	{
		state: "Sikkim",
		name: "Gyalshing",
		lat: 27.289,
		lng: 88.258,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Mangan",
		lat: 27.516,
		lng: 88.533,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Pakyong",
		lat: 27.231,
		lng: 88.594,
		terrain: "hills"
	},
	{
		state: "Sikkim",
		name: "Soreng",
		lat: 27.17,
		lng: 88.2,
		terrain: "hills"
	},
	{
		state: "Sikkim",
		name: "Rangpo",
		lat: 27.175,
		lng: 88.529,
		terrain: "hills"
	},
	{
		state: "Sikkim",
		name: "Ravangla",
		lat: 27.307,
		lng: 88.363,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Chungthang",
		lat: 27.604,
		lng: 88.646,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Lachen",
		lat: 27.716,
		lng: 88.557,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Pelling",
		lat: 27.317,
		lng: 88.243,
		terrain: "high-hills"
	},
	{
		state: "Sikkim",
		name: "Jorethang",
		lat: 27.13,
		lng: 88.323,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Imphal West",
		lat: 24.817,
		lng: 93.9368,
		terrain: "valley"
	},
	{
		state: "Manipur",
		name: "Imphal East",
		lat: 24.78,
		lng: 93.95,
		terrain: "valley"
	},
	{
		state: "Manipur",
		name: "Churachandpur",
		lat: 24.333,
		lng: 93.683,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Ukhrul",
		lat: 25.111,
		lng: 94.362,
		terrain: "high-hills"
	},
	{
		state: "Manipur",
		name: "Senapati",
		lat: 25.272,
		lng: 94.026,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Tamenglong",
		lat: 24.993,
		lng: 93.496,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Chandel",
		lat: 24.327,
		lng: 94,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Thoubal",
		lat: 24.634,
		lng: 94.016,
		terrain: "valley"
	},
	{
		state: "Manipur",
		name: "Bishnupur",
		lat: 24.627,
		lng: 93.778,
		terrain: "valley"
	},
	{
		state: "Manipur",
		name: "Kangpokpi",
		lat: 25.15,
		lng: 93.97,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Tengnoupal",
		lat: 24.38,
		lng: 94.15,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Pherzawl",
		lat: 24.25,
		lng: 93.18,
		terrain: "hills"
	},
	{
		state: "Manipur",
		name: "Kamjong",
		lat: 24.85,
		lng: 94.5,
		terrain: "high-hills"
	},
	{
		state: "Manipur",
		name: "Noney",
		lat: 24.85,
		lng: 93.75,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Aizawl",
		lat: 23.7271,
		lng: 92.7176,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Lunglei",
		lat: 22.88,
		lng: 92.73,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Champhai",
		lat: 23.456,
		lng: 93.328,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Kolasib",
		lat: 24.223,
		lng: 92.678,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Serchhip",
		lat: 23.342,
		lng: 92.85,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Mamit",
		lat: 23.929,
		lng: 92.49,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Lawngtlai",
		lat: 22.528,
		lng: 92.899,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Siaha",
		lat: 22.483,
		lng: 92.981,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Khawzawl",
		lat: 23.53,
		lng: 93.18,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Hnahthial",
		lat: 22.97,
		lng: 92.9,
		terrain: "hills"
	},
	{
		state: "Mizoram",
		name: "Saitual",
		lat: 23.68,
		lng: 92.98,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Kohima",
		lat: 25.6751,
		lng: 94.1086,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Dimapur",
		lat: 25.9044,
		lng: 93.7267,
		terrain: "valley"
	},
	{
		state: "Nagaland",
		name: "Mokokchung",
		lat: 26.322,
		lng: 94.518,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Tuensang",
		lat: 26.271,
		lng: 94.824,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Wokha",
		lat: 26.097,
		lng: 94.258,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Zunheboto",
		lat: 26.011,
		lng: 94.521,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Phek",
		lat: 25.666,
		lng: 94.466,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Mon",
		lat: 26.722,
		lng: 95.023,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Kiphire",
		lat: 25.896,
		lng: 94.786,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Longleng",
		lat: 26.473,
		lng: 94.81,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Peren",
		lat: 25.513,
		lng: 93.737,
		terrain: "hills"
	},
	{
		state: "Nagaland",
		name: "Noklak",
		lat: 26.2,
		lng: 95,
		terrain: "hills"
	},
	{
		state: "Tripura",
		name: "West Tripura",
		lat: 23.8315,
		lng: 91.2868,
		terrain: "valley"
	},
	{
		state: "Tripura",
		name: "Gomati",
		lat: 23.533,
		lng: 91.481,
		terrain: "foothill"
	},
	{
		state: "Tripura",
		name: "North Tripura",
		lat: 24.366,
		lng: 92.168,
		terrain: "hills"
	},
	{
		state: "Tripura",
		name: "Unakoti",
		lat: 24.332,
		lng: 92.004,
		terrain: "hills"
	},
	{
		state: "Tripura",
		name: "South Tripura",
		lat: 23.25,
		lng: 91.45,
		terrain: "foothill"
	},
	{
		state: "Tripura",
		name: "Dhalai",
		lat: 23.921,
		lng: 91.847,
		terrain: "hills"
	},
	{
		state: "Tripura",
		name: "Khowai",
		lat: 24.064,
		lng: 91.605,
		terrain: "foothill"
	},
	{
		state: "Tripura",
		name: "Sepahijala",
		lat: 23.67,
		lng: 91.27,
		terrain: "valley"
	},
	{
		state: "Tripura",
		name: "Sipahijala Melaghar",
		lat: 23.5,
		lng: 91.33,
		terrain: "valley"
	},
	{
		state: "Tripura",
		name: "Sabroom",
		lat: 23.001,
		lng: 91.724,
		terrain: "foothill"
	},
	{
		state: "Tripura",
		name: "Teliamura",
		lat: 23.84,
		lng: 91.63,
		terrain: "foothill"
	},
	{
		state: "Tripura",
		name: "Kanchanpur",
		lat: 24.1,
		lng: 92.2,
		terrain: "hills"
	}
];
var DISTRICT_COUNT = DISTRICTS.length;
function districtId(state, name) {
	return `${slug(state)}__${slug(name)}`;
}
function districtsForState(state) {
	return DISTRICTS.filter((d) => d.state === state);
}
function findDistrict(state, name) {
	return DISTRICTS.find((d) => d.state === state && d.name === name);
}
var STATE_CENTROIDS = {
	Assam: {
		lat: 26.2,
		lng: 92.9
	},
	"Arunachal Pradesh": {
		lat: 28.2,
		lng: 94.7
	},
	Meghalaya: {
		lat: 25.5,
		lng: 91.3
	},
	Sikkim: {
		lat: 27.35,
		lng: 88.45
	},
	Manipur: {
		lat: 24.8,
		lng: 93.95
	},
	Mizoram: {
		lat: 23.35,
		lng: 92.85
	},
	Nagaland: {
		lat: 26.1,
		lng: 94.5
	},
	Tripura: {
		lat: 23.75,
		lng: 91.7
	}
};
/** Simplified NER outer ring (lon, lat) for the 3D field silhouette. */
var NER_OUTLINE = [
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
	[88.07, 27.14]
];
var CORRIDOR_DEFS = [
	{
		id: "nh-10",
		name: "NH-10",
		stretch: "Siliguri – Gangtok",
		districts: [
			"Rangpo",
			"Gangtok",
			"Pakyong",
			"Namchi"
		]
	},
	{
		id: "nh-40",
		name: "NH-40",
		stretch: "Guwahati – Shillong",
		districts: [
			"Kamrup Metropolitan",
			"Ri Bhoi",
			"East Khasi Hills",
			"West Jaintia Hills"
		]
	},
	{
		id: "nh-29",
		name: "NH-29",
		stretch: "Dimapur – Kohima",
		districts: [
			"Dimapur",
			"Peren",
			"Kohima",
			"Phek"
		]
	},
	{
		id: "nh-54",
		name: "NH-54",
		stretch: "Kolasib – Aizawl",
		districts: [
			"Kolasib",
			"Aizawl",
			"Serchhip",
			"Mamit"
		]
	}
];
var RIVER_DEFS = [
	{
		id: "brahmaputra",
		name: "Brahmaputra",
		station: "Guwahati (Pandu)",
		danger: 49.7,
		unit: "m",
		state: "Assam"
	},
	{
		id: "teesta",
		name: "Teesta",
		station: "Gangtok sector",
		danger: 4.8,
		unit: "m",
		state: "Sikkim"
	},
	{
		id: "barak",
		name: "Barak",
		station: "Silchar (Annapurna)",
		danger: 19.8,
		unit: "m",
		state: "Assam"
	},
	{
		id: "subansiri",
		name: "Subansiri",
		station: "Gogamukh",
		danger: 92.4,
		unit: "m",
		state: "Arunachal Pradesh"
	},
	{
		id: "umiam",
		name: "Umiam",
		station: "Umiam Lake, Ri Bhoi",
		danger: 981,
		unit: "m",
		state: "Meghalaya"
	}
];
var DEFAULT_CONTACTS = "+918904405463\n+919880478888";
var SEED_INCIDENTS = [
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
		createdAt: "2026-09-12T02:14:00.000Z"
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
		createdAt: "2026-09-12T01:40:00.000Z"
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
		createdAt: "2026-09-11T23:05:00.000Z"
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
		createdAt: "2026-09-11T18:22:00.000Z"
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
		createdAt: "2026-09-11T16:48:00.000Z"
	}
];
var useEwsStore = create()(persist((set, get) => ({
	tab: "map",
	mapView: "gis",
	mode: "live",
	rain24: 48,
	rain72: 120,
	soil: .42,
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
	setRain24: (rain24) => set({
		rain24,
		mode: "simulation"
	}),
	setRain72: (rain72) => set({
		rain72,
		mode: "simulation"
	}),
	setSoil: (soil) => set({
		soil,
		mode: "simulation"
	}),
	setCloudburstTarget: (cloudburstState, cloudburstDistrict) => set({
		cloudburstState,
		cloudburstDistrict
	}),
	triggerCloudburst: () => {
		const { cloudburstState, cloudburstDistrict, cloudbursts } = get();
		set({
			cloudbursts: cloudbursts.some((c) => c.state === cloudburstState && c.district === cloudburstDistrict) ? cloudbursts : [...cloudbursts, {
				state: cloudburstState,
				district: cloudburstDistrict,
				triggeredAt: (/* @__PURE__ */ new Date()).toISOString()
			}],
			mode: "simulation"
		});
	},
	clearCloudbursts: () => set({ cloudbursts: [] }),
	addIncident: (incident) => set({ incidents: [incident, ...get().incidents] }),
	setIncidentStatus: (id, status) => set({ incidents: get().incidents.map((i) => i.id === id ? {
		...i,
		status
	} : i) }),
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
	setHydrated: (hydrated) => set({ hydrated })
}), {
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
		mapView: s.mapView
	})
}));
var FEATURE_NAMES = [
	"Slope_Angle",
	"Rain_24h",
	"Rain_72h",
	"Soil_Saturation"
];
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function clamp01(n) {
	return Math.min(1, Math.max(0, n));
}
/** Physics-informed landslide likelihood used to label synthetic NER terrain. */
function physicsScore(x) {
	const slope = clamp01((x[0] - 14) / 48);
	const r24 = clamp01((x[1] - 35) / 230);
	const r72 = clamp01((x[2] - 70) / 420);
	const soil = clamp01(x[3]);
	const interact = slope * soil * .18 + r24 * r72 * .1;
	return clamp01(.3 * slope + .26 * r24 + .24 * r72 + .16 * soil + interact);
}
function synthesize(n, rng) {
	const rows = [];
	for (let i = 0; i < n; i++) {
		const slope = 8 + rng() * 58;
		const rain24 = rng() * 300;
		const rain72 = rain24 + rng() * 320;
		const x = [
			slope,
			rain24,
			rain72,
			clamp01(.12 + rain72 / 900 + rng() * .35 + (slope > 40 ? .08 : 0))
		];
		const p = physicsScore(x);
		const noise = rng() < .07 ? rng() < .5 ? 0 : 1 : p > .52 ? 1 : 0;
		rows.push({
			x,
			y: noise
		});
	}
	return rows;
}
function gini(ys) {
	if (!ys.length) return 0;
	let p = 0;
	for (const y of ys) p += y;
	p /= ys.length;
	return 2 * p * (1 - p);
}
function majority(ys) {
	let s = 0;
	for (const y of ys) s += y;
	const proba = ys.length ? s / ys.length : 0;
	return {
		proba,
		leaf: proba >= .5 ? 1 : 0
	};
}
function uniqueThresholds(vals, rng) {
	const sorted = [...vals].sort((a, b) => a - b);
	const out = [];
	const cap = Math.min(24, sorted.length - 1);
	if (sorted.length < 2) return out;
	const step = Math.max(1, Math.floor((sorted.length - 1) / cap));
	for (let i = step; i < sorted.length; i += step) {
		const a = sorted[i - 1];
		const b = sorted[i];
		if (b > a) out.push((a + b) / 2);
	}
	if (!out.length) out.push(sorted[Math.floor(rng() * sorted.length)]);
	return out;
}
function grow(rows, depth, maxDepth, minLeaf, rng) {
	const ys = rows.map((r) => r.y);
	const { proba } = majority(ys);
	if (depth >= maxDepth || rows.length <= minLeaf || gini(ys) < .02) return {
		leaf: true,
		proba
	};
	const featOrder = [
		0,
		1,
		2,
		3
	];
	for (let i = featOrder.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		const tmp = featOrder[i];
		featOrder[i] = featOrder[j];
		featOrder[j] = tmp;
	}
	const tryFeats = featOrder.slice(0, 2);
	let bestGain = -1;
	let bestFeat = 0;
	let bestThr = 0;
	let bestLeft = [];
	let bestRight = [];
	const parent = gini(ys);
	for (const f of tryFeats) {
		const thrs = uniqueThresholds(rows.map((r) => r.x[f]), rng);
		for (const thr of thrs) {
			const left = [];
			const right = [];
			for (const r of rows) (r.x[f] <= thr ? left : right).push(r);
			if (left.length < minLeaf || right.length < minLeaf) continue;
			const gain = parent - left.length / rows.length * gini(left.map((r) => r.y)) - right.length / rows.length * gini(right.map((r) => r.y));
			if (gain > bestGain) {
				bestGain = gain;
				bestFeat = f;
				bestThr = thr;
				bestLeft = left;
				bestRight = right;
			}
		}
	}
	if (bestGain < .001 || !bestLeft.length || !bestRight.length) return {
		leaf: true,
		proba
	};
	return {
		leaf: false,
		feat: bestFeat,
		thr: bestThr,
		left: grow(bestLeft, depth + 1, maxDepth, minLeaf, rng),
		right: grow(bestRight, depth + 1, maxDepth, minLeaf, rng)
	};
}
function walk(node, x) {
	if (node.leaf || node.feat === void 0 || node.thr === void 0) return node.proba ?? 0;
	const branch = x[node.feat] <= node.thr ? node.left : node.right;
	return branch ? walk(branch, x) : node.proba ?? 0;
}
function bootstrap(rows, rng) {
	const out = [];
	for (let i = 0; i < rows.length; i++) out.push(rows[Math.floor(rng() * rows.length)]);
	return out;
}
var N_ESTIMATORS = 28;
var MAX_DEPTH = 6;
var N_SAMPLES = 720;
var SEED = 26001;
function train() {
	const rng = mulberry32(SEED);
	const data = synthesize(N_SAMPLES, rng);
	const split = Math.floor(data.length * .8);
	const trainSet = data.slice(0, split);
	const testSet = data.slice(split);
	const trees = [];
	const impurityDrop = [
		0,
		0,
		0,
		0
	];
	for (let t = 0; t < N_ESTIMATORS; t++) {
		const tree = grow(bootstrap(trainSet, rng), 0, MAX_DEPTH, 8, rng);
		trees.push(tree);
		const stack = [tree];
		while (stack.length) {
			const n = stack.pop();
			if (!n.leaf && n.feat !== void 0) impurityDrop[n.feat] += 1;
			if (n.left) stack.push(n.left);
			if (n.right) stack.push(n.right);
		}
	}
	const predictProba = (x) => {
		let s = 0;
		for (const tree of trees) s += walk(tree, x);
		return s / trees.length;
	};
	let correct = 0;
	for (const row of testSet) if ((predictProba(row.x) >= .5 ? 1 : 0) === row.y) correct++;
	const impSum = impurityDrop.reduce((a, b) => a + b, 0) || 1;
	return {
		predictProba,
		card: {
			nEstimators: N_ESTIMATORS,
			maxDepth: MAX_DEPTH,
			nSamples: N_SAMPLES,
			holdoutAccuracy: correct / testSet.length,
			importance: FEATURE_NAMES.map((name, i) => ({
				name,
				value: impurityDrop[i] / impSum
			}))
		}
	};
}
var MODEL = train();
var MODEL_CARD = MODEL.card;
function predictHazard(x) {
	const proba = MODEL.predictProba(x);
	return {
		proba,
		hazard: proba >= .5 ? 1 : 0
	};
}
var TERRAIN_SLOPE = {
	floodplain: [8, 16],
	valley: [12, 26],
	foothill: [20, 36],
	hills: [28, 48],
	"high-hills": [38, 62]
};
function hash01(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0) % 1e4 / 1e4;
}
function baselineFor(id, terrain) {
	const [lo, hi] = TERRAIN_SLOPE[terrain] ?? [18, 40];
	const u = hash01(id);
	const u2 = hash01(id + ":r");
	const u3 = hash01(id + ":s");
	const slope = lo + (hi - lo) * u;
	const rain24 = 18 + u2 * 55 + (terrain.includes("hill") ? 12 : 0);
	const rain72 = rain24 * (1.8 + u3 * .9) + 20;
	return {
		slope,
		rain24,
		rain72,
		soil: clamp(.22 + rain72 / 900 + u * .15, 0, .85)
	};
}
function liveForcing(tick) {
	const phase = tick % 3600 / 3600;
	const pulse = .5 + .5 * Math.sin(phase * Math.PI * 2);
	return {
		rain24: 8 + pulse * 22,
		rain72: 14 + pulse * 36,
		soil: .04 + pulse * .08
	};
}
function incidentBoostMap(incidents) {
	const boost = {};
	for (const inc of incidents) {
		if (inc.status === "dismissed") continue;
		const id = districtId(inc.state, inc.district);
		const illegal = inc.category.startsWith("Illegal Construction");
		const high = inc.severity === "high";
		if (!high && !illegal) continue;
		let add = 0;
		if (high) add += .16;
		if (illegal) add += .1;
		if (inc.status === "verified") add += .06;
		boost[id] = Math.min(.48, (boost[id] ?? 0) + add);
	}
	return boost;
}
function nearestBoost(lat, lng, boosts) {
	let extra = 0;
	for (const d of DISTRICTS) {
		const b = boosts[districtId(d.state, d.name)];
		if (!b) continue;
		const km = haversineKm(lat, lng, d.lat, d.lng);
		if (km < .5) extra = Math.max(extra, b);
		else if (km < 35) extra = Math.max(extra, b * (1 - km / 35) * .65);
	}
	return extra;
}
function evaluateField(input) {
	const boosts = incidentBoostMap(input.incidents);
	const live = liveForcing(input.tick);
	const cloudSet = new Set(input.cloudbursts.map((c) => districtId(c.state, c.district)));
	const points = DISTRICTS.map((d) => {
		const id = districtId(d.state, d.name);
		const base = baselineFor(id, d.terrain);
		let rain24;
		let rain72;
		let soil;
		if (input.mode === "live") {
			rain24 = base.rain24 + live.rain24;
			rain72 = base.rain72 + live.rain72;
			soil = clamp(base.soil + live.soil, 0, 1);
		} else {
			rain24 = clamp(base.rain24 * (input.rain24 / 48), 0, 300);
			rain72 = clamp(base.rain72 * (input.rain72 / 120), 0, 600);
			soil = clamp(base.soil + (input.soil - .42), 0, 1);
		}
		const burst = cloudSet.has(id);
		if (burst) {
			rain24 = Math.min(300, rain24 + 250);
			rain72 = Math.min(600, rain72 + 450);
			soil = .99;
		}
		const nb = nearestBoost(d.lat, d.lng, boosts);
		if (nb > 0) {
			soil = clamp(soil + nb, 0, 1);
			rain24 = Math.min(300, rain24 + nb * 80);
			rain72 = Math.min(600, rain72 + nb * 140);
		}
		const { proba, hazard } = predictHazard([
			base.slope,
			rain24,
			rain72,
			soil
		]);
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
			soil: Math.round(soil * 1e3) / 1e3,
			proba,
			hazard,
			boosted: nb > .04,
			cloudburst: burst
		};
	});
	const highRisk = points.filter((p) => p.hazard === 1).length;
	const maxP = points.reduce((m, p) => Math.max(m, p.proba), 0);
	const hasBurst = cloudSet.size > 0;
	const hasHighIncident = input.incidents.some((i) => i.status !== "dismissed" && i.severity === "high");
	let threat = "NORMAL";
	if (hasBurst || highRisk >= 12 || maxP >= .82 || hasHighIncident) threat = "CRITICAL WARNING";
	else if (highRisk >= 5 || maxP >= .62) threat = "WATCH";
	const byName = new Map(points.map((p) => [p.district, p]));
	const corridors = CORRIDOR_DEFS.map((c) => {
		const pts = c.districts.map((name) => byName.get(name)).filter(Boolean);
		const risk = pts.length === 0 ? 0 : pts.reduce((s, p) => s + p.proba, 0) / pts.length;
		const tag = risk >= .55 || pts.some((p) => p.hazard === 1) ? "restricted" : risk >= .35 ? "watch" : "open";
		return {
			id: c.id,
			name: c.name,
			stretch: c.stretch,
			districts: [...c.districts],
			risk,
			tag
		};
	});
	const rivers = RIVER_DEFS.map((r) => {
		const local = points.filter((p) => p.state === r.state);
		const rain = local.reduce((s, p) => s + p.rain72, 0) / Math.max(1, local.length);
		const soil = local.reduce((s, p) => s + p.soil, 0) / Math.max(1, local.length);
		const frac = clamp(.42 + rain / 650 * .45 + soil * .18, .25, 1.05);
		const level = r.danger * frac;
		const trend = frac > .78 ? "rising" : frac < .5 ? "falling" : "steady";
		return {
			id: r.id,
			name: r.name,
			station: r.station,
			level: Math.round(level * 100) / 100,
			danger: r.danger,
			unit: r.unit,
			trend
		};
	});
	const runId = highRisk * 1e3 + Math.round(maxP * 1e3) + cloudSet.size * 17 + Object.keys(boosts).length * 13;
	return {
		points,
		highRisk,
		threat,
		corridors,
		rivers,
		runId
	};
}
function useHazardField() {
	const mode = useEwsStore((s) => s.mode);
	const rain24 = useEwsStore((s) => s.rain24);
	const rain72 = useEwsStore((s) => s.rain72);
	const soil = useEwsStore((s) => s.soil);
	const cloudbursts = useEwsStore((s) => s.cloudbursts);
	const incidents = useEwsStore((s) => s.incidents);
	const tick = useEwsStore((s) => s.tick);
	return (0, import_react.useMemo)(() => evaluateField({
		mode,
		rain24,
		rain72,
		soil,
		cloudbursts,
		incidents,
		tick
	}), [
		mode,
		rain24,
		rain72,
		soil,
		cloudbursts,
		incidents,
		tick
	]);
}
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase", {
	variants: { tone: {
		default: "bg-surface-2 text-muted",
		accent: "bg-accent/15 text-accent",
		danger: "bg-danger/15 text-danger",
		warn: "bg-warn/15 text-warn",
		ok: "bg-ok/15 text-ok",
		invert: "bg-fg text-bg"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
var NER_STATES = [
	"Assam",
	"Arunachal Pradesh",
	"Meghalaya",
	"Sikkim",
	"Manipur",
	"Mizoram",
	"Nagaland",
	"Tripura"
];
var INCIDENT_CATEGORIES = [
	"Soil Erosion / Loose Topsoil",
	"Illegal Construction / Slope Undercutting",
	"Minor Rockfall / Debris Accumulation",
	"Blocked Drainage",
	"Visible Ground Cracks"
];
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			invert: "bg-fg text-bg hover:bg-fg/90",
			danger: "bg-danger text-fg hover:bg-danger/90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-muted hover:bg-surface-2 hover:text-fg",
			subtle: "bg-surface-2 text-fg hover:bg-surface-2/80"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-10 w-full rounded-sm bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-faint", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-50", "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-xs font-medium uppercase tracking-wider text-muted", className),
	...props
}));
Label.displayName = "Label";
var SelectNative = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
	ref,
	className: cn("h-10 w-full appearance-none rounded-sm bg-surface-2 px-3 pr-8 text-sm text-fg shadow-[var(--shadow-border)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-50", "bg-[length:12px] bg-[right_10px_center] bg-no-repeat", className),
	style: { backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'><path d='M2.5 4.5L6 8L9.5 4.5' stroke='%238b9690' stroke-width='1.4' stroke-linecap='round'/></svg>")` },
	...props,
	children
}));
SelectNative.displayName = "SelectNative";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-24 w-full rounded-sm bg-surface-2 px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-faint", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
function tipHtml(p) {
	const cls = p.hazard === 1 ? "HIGH" : "LOW";
	return `<div style="padding:10px 12px;font-size:12px;line-height:1.45">
    <div style="font-family:Georgia,serif;font-size:14px;color:#e6ebe7">${escapeHtml(p.district)}</div>
    <div style="color:#8b9690;margin-bottom:8px">${escapeHtml(p.state)}</div>
    <div style="display:grid;grid-template-columns:1fr auto;gap:2px 12px;font-variant-numeric:tabular-nums">
      <span style="color:#8b9690">Slope</span><span>${p.slope.toFixed(1)}°</span>
      <span style="color:#8b9690">24h rain</span><span>${p.rain24.toFixed(1)} mm</span>
      <span style="color:#8b9690">72h rain</span><span>${p.rain72.toFixed(1)} mm</span>
      <span style="color:#8b9690">Soil sat.</span><span>${p.soil.toFixed(2)}</span>
      <span style="color:#8b9690">Model P(H)</span><span>${p.proba.toFixed(2)}</span>
      <span style="color:#8b9690">Class</span><span style="color:${p.hazard === 1 ? "#c45c4a" : "#5d8a6a"}">${cls}</span>
    </div>
  </div>`;
}
function GisMap({ points, incidents = [], selectedId, onSelect, showIncidents }) {
	const hostRef = (0, import_react.useRef)(null);
	const mapRef = (0, import_react.useRef)(null);
	const layersRef = (0, import_react.useRef)(null);
	const onSelectRef = (0, import_react.useRef)(onSelect);
	const [mapReady, setMapReady] = (0, import_react.useState)(false);
	onSelectRef.current = onSelect;
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!hostRef.current) return;
		(async () => {
			const L = (await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			if (cancelled || !hostRef.current) return;
			const map = L.map(hostRef.current, {
				zoomControl: true,
				attributionControl: true,
				minZoom: 5,
				maxZoom: 12,
				maxBounds: [[20.5, 86.5], [30.8, 98.8]]
			});
			map.fitBounds([[22, 88.05], [29.45, 97.4]], {
				padding: [16, 16],
				maxZoom: 7
			});
			L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
				attribution: "Esri",
				maxZoom: 16
			}).addTo(map);
			L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
				attribution: "Carto",
				pane: "shadowPane"
			}).addTo(map);
			const group = L.layerGroup().addTo(map);
			mapRef.current = map;
			layersRef.current = group;
			map.whenReady(() => {
				map.invalidateSize();
				setMapReady(true);
			});
			window.setTimeout(() => map.invalidateSize(), 200);
		})();
		return () => {
			cancelled = true;
			mapRef.current?.remove();
			mapRef.current = null;
			layersRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const group = layersRef.current;
		if (!mapReady || !group) return;
		import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((mod) => {
			const L = mod.default;
			if (layersRef.current !== group) return;
			group.clearLayers();
			for (const p of points) {
				const high = p.hazard === 1;
				const color = high ? "#c45c4a" : p.proba > .35 ? "#c4a35a" : "#5d8a6a";
				const marker = L.circleMarker([p.lat, p.lng], {
					radius: high ? 8 : 5.5,
					color,
					weight: selectedId === p.id ? 3 : 1.25,
					fillColor: color,
					fillOpacity: high ? .85 : .55,
					opacity: .95
				});
				marker.bindTooltip(tipHtml(p), {
					className: "hazard-tip",
					sticky: true,
					opacity: 1,
					direction: "top"
				});
				marker.on("click", () => onSelectRef.current(p.id));
				marker.addTo(group);
			}
			if (showIncidents) for (const inc of incidents) {
				if (inc.status === "dismissed") continue;
				const color = inc.severity === "high" ? "#c45c4a" : "#c4a35a";
				const m = L.circleMarker([inc.lat, inc.lng], {
					radius: 6,
					color,
					weight: 2,
					fillColor: color,
					fillOpacity: .2,
					dashArray: "3 3"
				});
				m.bindTooltip(`<div style="padding:8px 10px;font-size:12px"><strong>${escapeHtml(inc.district)}</strong><br/>${escapeHtml(inc.category)}<br/>${inc.severity.toUpperCase()} · ${inc.status}</div>`, {
					className: "hazard-tip",
					sticky: true,
					opacity: 1
				});
				m.on("click", () => onSelectRef.current(`inc:${inc.id}`));
				m.addTo(group);
			}
		});
	}, [
		points,
		incidents,
		selectedId,
		showIncidents,
		mapReady
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: hostRef,
		className: "h-full min-h-72 w-full overflow-hidden rounded-md"
	});
}
function Panel({ title, action, children, className, bodyClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("flex min-h-0 flex-col rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-3 flex items-center justify-between gap-3 px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: title
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("min-h-0 flex-1", bodyClassName),
			children
		})]
	});
}
function IncidentTab({ points }) {
	const incidents = useEwsStore((s) => s.incidents);
	const addIncident = useEwsStore((s) => s.addIncident);
	const setIncidentStatus = useEwsStore((s) => s.setIncidentStatus);
	const selectedIncidentId = useEwsStore((s) => s.selectedIncidentId);
	const setSelectedIncidentId = useEwsStore((s) => s.setSelectedIncidentId);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 gap-3 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncidentForm, { onCreate: addIncident }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Community map",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[min(36vh,360px)] min-h-56 overflow-hidden rounded-md bg-bg",
					children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GisMap, {
						points,
						incidents,
						showIncidents: true,
						selectedId: selectedIncidentId,
						onSelect: (id) => {
							if (id.startsWith("inc:")) setSelectedIncidentId(id.slice(4));
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center text-sm text-muted",
						children: "Loading community map…"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "SDMA verification matrix",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-xl text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-xs uppercase tracking-wider text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Place"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Sev."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Action"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: incidents.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/70 align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-2.5 pr-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-fg",
										children: inc.district
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: inc.state
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 text-muted",
									children: inc.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: inc.severity === "high" ? "danger" : inc.severity === "medium" ? "warn" : "ok",
										children: inc.severity
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: inc.status === "verified" ? "ok" : inc.status === "dismissed" ? "default" : "warn",
										children: inc.status === "verified" ? "Ground-truth" : inc.status === "dismissed" ? "Dismissed" : "Pending"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											disabled: inc.status === "verified",
											onClick: () => setIncidentStatus(inc.id, "verified"),
											children: "Verify & escalate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											disabled: inc.status === "dismissed",
											onClick: () => setIncidentStatus(inc.id, "dismissed"),
											children: "False alarm"
										})]
									})
								})
							]
						}, inc.id)) })]
					})
				})
			})]
		})]
	});
}
function IncidentForm({ onCreate }) {
	const [state, setState] = (0, import_react.useState)("Sikkim");
	const districts = districtsForState(state);
	const [district, setDistrict] = (0, import_react.useState)(districts[0]?.name ?? "Gangtok");
	const [category, setCategory] = (0, import_react.useState)(INCIDENT_CATEGORIES[0]);
	const [severity, setSeverity] = (0, import_react.useState)("medium");
	const [lat, setLat] = (0, import_react.useState)(String(districts[0]?.lat ?? 27.33));
	const [lng, setLng] = (0, import_react.useState)(String(districts[0]?.lng ?? 88.6));
	const [notes, setNotes] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("citizen");
	const [name, setName] = (0, import_react.useState)("");
	const [photo, setPhoto] = (0, import_react.useState)();
	const [msg, setMsg] = (0, import_react.useState)(null);
	function applyDistrict(st, name) {
		const d = findDistrict(st, name);
		if (!d) return;
		setDistrict(name);
		setLat(d.lat.toFixed(4));
		setLng(d.lng.toFixed(4));
	}
	function onState(st) {
		setState(st);
		applyDistrict(st, districtsForState(st)[0]?.name ?? "");
	}
	function locate() {
		if (!navigator.geolocation) return;
		navigator.geolocation.getCurrentPosition((pos) => {
			setLat(pos.coords.latitude.toFixed(4));
			setLng(pos.coords.longitude.toFixed(4));
		});
	}
	function onFile(file) {
		if (!file) return;
		if (!([
			"image/jpeg",
			"image/png",
			"image/jpg"
		].includes(file.type) || /\.(jpe?g|png)$/i.test(file.name))) {
			setMsg("Photos must be JPG or PNG.");
			return;
		}
		if (file.size > 16e5) {
			setMsg("Keep photos under 1.5 MB.");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => setPhoto(String(reader.result));
		reader.readAsDataURL(file);
	}
	function submit(e) {
		e.preventDefault();
		const latN = Number(lat);
		const lngN = Number(lng);
		if (!Number.isFinite(latN) || !Number.isFinite(lngN)) {
			setMsg("Enter valid coordinates.");
			return;
		}
		onCreate({
			id: `inc-${Date.now()}`,
			category,
			state,
			district,
			lat: latN,
			lng: lngN,
			severity,
			notes: notes.trim(),
			reporterRole: role,
			reporterName: name.trim(),
			photoDataUrl: photo,
			status: "pending",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setNotes("");
		setPhoto(void 0);
		setMsg(severity === "high" || category.startsWith("Illegal Construction") ? "Logged. Nearest grid cells were up-weighted in the forest." : "Logged and queued for SDMA review.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Field observation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-3",
			onSubmit: submit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Incident category",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNative, {
						value: category,
						onChange: (e) => setCategory(e.target.value),
						children: INCIDENT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "State",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNative, {
							value: state,
							onChange: (e) => onState(e.target.value),
							children: NER_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "District",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNative, {
							value: district,
							onChange: (e) => applyDistrict(state, e.target.value),
							children: districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.name,
								children: d.name
							}, d.name))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1fr_1fr_auto] items-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "Latitude",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: lat,
								onChange: (e) => setLat(e.target.value),
								inputMode: "decimal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "Longitude",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: lng,
								onChange: (e) => setLng(e.target.value),
								inputMode: "decimal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: locate,
							children: "GPS"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Severity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectNative, {
						value: severity,
						onChange: (e) => setSeverity(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "low",
								children: "Low — watch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "medium",
								children: "Medium — impending danger"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "high",
								children: "High — immediate threat"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field$1, {
					label: "Site photo (JPG / PNG)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "file",
						accept: ".jpg,.jpeg,.png,image/jpeg,image/png",
						onChange: (e) => onFile(e.target.files?.[0])
					}), photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo,
						alt: "Site condition preview",
						className: "mt-2 h-24 rounded-sm object-cover"
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Field notes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						rows: 3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Reporter role",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectNative, {
							value: role,
							onChange: (e) => setRole(e.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "citizen",
									children: "Citizen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "bro",
									children: "BRO Engineer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "sdma",
									children: "SDMA Official"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Name (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (e) => setName(e.target.value)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "invert",
					className: "w-full",
					children: "Submit field observation"
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-accent",
					children: msg
				}) : null
			]
		})
	});
}
function Field$1({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function KpiStrip({ highRisk, threat, mode, coverage }) {
	const threatTone = threat === "CRITICAL WARNING" ? "danger" : threat === "WATCH" ? "warn" : "ok";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "Monitored coverage",
				value: "8 NER States",
				sub: `${coverage || DISTRICT_COUNT} districts / cells`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "High-risk points",
				value: String(highRisk).padStart(2, "0"),
				sub: "Random forest class 1",
				warn: highRisk > 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "Threat status",
				value: threat === "CRITICAL WARNING" ? "CRITICAL" : threat,
				sub: threat === "CRITICAL WARNING" ? "WARNING" : "operating picture",
				badge: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: threatTone,
					children: threat
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "Data source",
				value: mode === "live" ? "LIVE" : "SIM",
				sub: mode === "live" ? "Multi-agency satellite stream" : "Interactive simulation engine",
				live: mode === "live"
			})
		]
	});
}
function Kpi({ label, value, sub, badge, warn, live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
					children: label
				}), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-ok",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-ok" }), "Satellite"]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 font-display text-2xl leading-none tracking-tight", warn ? "text-danger" : "text-fg"),
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: sub
				}), badge]
			})
		]
	});
}
var BASE = [
	{
		id: "isro",
		name: "ISRO / NRSC Landslide Atlas",
		layer: "Inventory polygons",
		cadence: "Campaign"
	},
	{
		id: "bhuvan",
		name: "Bhuvan Geoportal",
		layer: "Terrain / LULC tiles",
		cadence: "15 min cache"
	},
	{
		id: "s1",
		name: "Copernicus Sentinel-1",
		layer: "InSAR coherence",
		cadence: "12-day pass"
	},
	{
		id: "s2",
		name: "Sentinel-2",
		layer: "Optical 10 m",
		cadence: "5-day"
	},
	{
		id: "gpm",
		name: "NASA GPM IMERG",
		layer: "Half-hourly rain",
		cadence: "30 min"
	},
	{
		id: "imd",
		name: "IMD AWS",
		layer: "Rain gauges / AWS",
		cadence: "15 min"
	},
	{
		id: "gee",
		name: "Google Earth Engine",
		layer: "Fused composites",
		cadence: "On demand"
	},
	{
		id: "hist",
		name: "Historical Inventory",
		layer: "Event catalogue",
		cadence: "Static"
	}
];
function agencyFeeds(mode, tick) {
	return BASE.map((a, i) => {
		if (mode === "simulation") return {
			...a,
			status: "synced",
			lag: "simulation overlay"
		};
		const wave = (tick + i * 3) % 11;
		const status = a.id === "s2" && wave > 8 ? "degraded" : "synced";
		const minutes = a.cadence.includes("Static") ? 0 : 4 + (tick + i) % 9;
		return {
			...a,
			status,
			lag: a.cadence.includes("Static") ? "catalogue" : `${minutes} min ago`
		};
	});
}
function Progress({ value, className, tone = "accent" }) {
	const pct = Math.max(0, Math.min(100, value));
	const fill = tone === "danger" ? "bg-danger" : tone === "warn" ? "bg-warn" : tone === "ok" ? "bg-ok" : "bg-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-surface-2", className),
		role: "progressbar",
		"aria-valuenow": Math.round(pct),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-300 ease-out", fill),
			style: { width: `${pct}%` }
		})
	});
}
function AgencyPanel({ mode, tick }) {
	const feeds = agencyFeeds(mode, tick);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Connected agency pipeline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: feeds.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3 rounded-md bg-surface-2 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-fg",
						children: f.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted",
						children: [
							f.layer,
							" · ",
							f.cadence
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: f.status === "degraded" ? "warn" : "ok",
						children: f.status
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-faint",
						children: f.lag
					})]
				})]
			}, f.id))
		})
	});
}
function CorridorPanel({ corridors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Critical transport corridors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: corridors.map((c) => {
				const pct = Math.round(c.risk * 100);
				const tone = c.tag === "restricted" ? "danger" : c.tag === "watch" ? "warn" : "ok";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-fg",
							children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs text-muted",
								children: c.stretch
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone,
							children: c.tag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						tone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[11px] tabular text-faint",
						children: [pct, "% corridor hazard"]
					})
				] }, c.id);
			})
		})
	});
}
function RiverPanel({ rivers }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Hydrological river levels",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: rivers.map((r) => {
				const pct = Math.round(r.level / r.danger * 100);
				const tone = pct >= 100 ? "danger" : pct >= 80 ? "warn" : "ok";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted",
						children: r.station
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "tabular text-sm text-fg",
							children: [r.level.toFixed(2), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-xs text-muted",
								children: r.unit
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-faint",
							children: [
								"danger ",
								r.danger,
								" · ",
								r.trend
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: Math.min(100, pct),
					tone
				})] }, r.id);
			})
		})
	});
}
function PointDetail({ point }) {
	if (!point) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-1 text-sm text-muted",
		children: "Select a grid cell on the map for the model readout."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl leading-tight",
					children: point.district
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: point.state
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: point.hazard === 1 ? "danger" : "ok",
					children: point.hazard === 1 ? "Class 1 High" : "Class 0 Low"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Slope angle",
						v: `${point.slope.toFixed(1)}°`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "24h rainfall",
						v: `${point.rain24.toFixed(1)} mm`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "72h rainfall",
						v: `${point.rain72.toFixed(1)} mm`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Soil saturation",
						v: point.soil.toFixed(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "P(hazard)",
						v: point.proba.toFixed(3)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Terrain",
						v: point.terrain
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [point.cloudburst ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "danger",
					children: "Cloudburst cell"
				}) : null, point.boosted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "warn",
					children: "Citizen reinforcement"
				}) : null]
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] uppercase tracking-wider text-faint",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "tabular text-fg",
		children: v
	})] });
}
var LNG_MIN = 87.8;
var LAT_MAX = 29.6;
function norm(lng, lat) {
	return {
		x: (lng - LNG_MIN) / 9.700000000000003,
		y: (LAT_MAX - lat) / 7.900000000000002
	};
}
function Scatter3d({ points, selectedId, onSelect }) {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const yawRef = (0, import_react.useRef)(-.42);
	const hoverRef = (0, import_react.useRef)(null);
	const pointsRef = (0, import_react.useRef)(points);
	const selectedRef = (0, import_react.useRef)(selectedId);
	const onSelectRef = (0, import_react.useRef)(onSelect);
	pointsRef.current = points;
	selectedRef.current = selectedId;
	onSelectRef.current = onSelect;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let dragging = false;
		let lastX = 0;
		let running = true;
		const project = (lng, lat, h, w, ht) => {
			const n = norm(lng, lat);
			const yaw = yawRef.current;
			const cx = n.x - .5;
			const cy = n.y - .5;
			const rx = cx * Math.cos(yaw) - cy * Math.sin(yaw);
			const ry = cx * Math.sin(yaw) + cy * Math.cos(yaw);
			const scaleX = w * .78;
			const scaleY = ht * .42;
			return {
				x: w * .5 + rx * scaleX,
				y: ht * .58 + ry * scaleY - h,
				depth: ry,
				rx,
				ry
			};
		};
		const hitTest = (mx, my, w, ht) => {
			let best = null;
			for (const p of pointsRef.current) {
				const h = 18 + p.proba * 92;
				const pr = project(p.lng, p.lat, h, w, ht);
				const d = (pr.x - mx) ** 2 + (pr.y - my) ** 2;
				if (d < 196 && (!best || d < best.d)) best = {
					id: p.id,
					d
				};
			}
			return best?.id ?? null;
		};
		const draw = () => {
			if (!running) return;
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			const rect = wrap.getBoundingClientRect();
			const w = Math.max(1, rect.width);
			const ht = Math.max(1, rect.height);
			if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(ht * dpr)) {
				canvas.width = Math.floor(w * dpr);
				canvas.height = Math.floor(ht * dpr);
				canvas.style.width = `${w}px`;
				canvas.style.height = `${ht}px`;
			}
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, w, ht);
			const g = ctx.createLinearGradient(0, 0, 0, ht);
			g.addColorStop(0, "#10161b");
			g.addColorStop(1, "#0c1014");
			ctx.fillStyle = g;
			ctx.fillRect(0, 0, w, ht);
			ctx.save();
			ctx.strokeStyle = "rgba(230,235,231,0.05)";
			ctx.lineWidth = 1;
			for (let i = 0; i < 8; i++) {
				const y = ht * .22 + i * (ht * .08);
				ctx.beginPath();
				ctx.moveTo(w * .06, y);
				ctx.lineTo(w * .94, y);
				ctx.stroke();
			}
			ctx.restore();
			ctx.beginPath();
			NER_OUTLINE.forEach(([lng, lat], i) => {
				const p = project(lng, lat, 0, w, ht);
				if (i === 0) ctx.moveTo(p.x, p.y);
				else ctx.lineTo(p.x, p.y);
			});
			ctx.closePath();
			ctx.fillStyle = "rgba(154,175,184,0.05)";
			ctx.fill();
			ctx.strokeStyle = "rgba(154,175,184,0.28)";
			ctx.lineWidth = 1.25;
			ctx.stroke();
			const sorted = [...pointsRef.current].sort((a, b) => {
				return project(a.lng, a.lat, 0, w, ht).depth - project(b.lng, b.lat, 0, w, ht).depth;
			});
			for (const p of sorted) {
				const h = 16 + p.proba * 96;
				const top = project(p.lng, p.lat, h, w, ht);
				const base = project(p.lng, p.lat, 0, w, ht);
				const high = p.hazard === 1;
				const selected = selectedRef.current === p.id;
				const hover = hoverRef.current === p.id;
				const col = high ? "#c45c4a" : p.proba > .35 ? "#c4a35a" : "#5d8a6a";
				const width = selected || hover ? 5.5 : high ? 4.2 : 3.2;
				ctx.beginPath();
				ctx.strokeStyle = "rgba(0,0,0,0.35)";
				ctx.lineWidth = width + 2;
				ctx.moveTo(base.x + 1.5, base.y + 2);
				ctx.lineTo(top.x + 1.5, top.y + 2);
				ctx.stroke();
				ctx.beginPath();
				ctx.strokeStyle = col;
				ctx.globalAlpha = high ? .95 : .7;
				ctx.lineWidth = width;
				ctx.lineCap = "round";
				ctx.moveTo(base.x, base.y);
				ctx.lineTo(top.x, top.y);
				ctx.stroke();
				ctx.globalAlpha = 1;
				ctx.beginPath();
				ctx.fillStyle = col;
				ctx.arc(top.x, top.y, selected || hover ? 4.2 : 2.6, 0, Math.PI * 2);
				ctx.fill();
				if (high || selected || hover) {
					ctx.fillStyle = "#e6ebe7";
					ctx.font = "11px ui-sans-serif, Segoe UI, sans-serif";
					ctx.fillText(p.district, top.x + 6, top.y - 4);
				}
			}
			ctx.fillStyle = "rgba(139,150,144,0.85)";
			ctx.font = "10px ui-sans-serif, Segoe UI, sans-serif";
			ctx.fillText("Drag to rotate  ·  height = P(hazard)", 14, ht - 14);
			for (const [state, c] of Object.entries(STATE_CENTROIDS)) {
				const pr = project(c.lng, c.lat, 0, w, ht);
				ctx.fillStyle = "rgba(154,175,184,0.55)";
				ctx.font = "10px ui-sans-serif, Segoe UI, sans-serif";
				ctx.fillText(state, pr.x - 18, pr.y + 16);
			}
			raf = requestAnimationFrame(draw);
		};
		const onPointerDown = (e) => {
			dragging = true;
			lastX = e.clientX;
			e.target.setPointerCapture(e.pointerId);
		};
		const onPointerMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			const mx = e.clientX - rect.left;
			const my = e.clientY - rect.top;
			hoverRef.current = hitTest(mx, my, rect.width, rect.height);
			if (dragging) {
				yawRef.current += (e.clientX - lastX) * .006;
				lastX = e.clientX;
			}
		};
		const onPointerUp = (e) => {
			const wasDrag = dragging;
			dragging = false;
			if (wasDrag) {
				const rect = canvas.getBoundingClientRect();
				const id = hitTest(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
				if (id) onSelectRef.current(id);
			}
		};
		canvas.addEventListener("pointerdown", onPointerDown);
		canvas.addEventListener("pointermove", onPointerMove);
		canvas.addEventListener("pointerup", onPointerUp);
		raf = requestAnimationFrame(draw);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			canvas.removeEventListener("pointerdown", onPointerDown);
			canvas.removeEventListener("pointermove", onPointerMove);
			canvas.removeEventListener("pointerup", onPointerUp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "relative h-full min-h-[280px] w-full overflow-hidden rounded-md bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block h-full w-full touch-none"
		})
	});
}
function MapTab({ points, corridors, rivers, mode, tick }) {
	const mapView = useEwsStore((s) => s.mapView);
	const setMapView = useEwsStore((s) => s.setMapView);
	const selectedPointId = useEwsStore((s) => s.selectedPointId);
	const setSelectedPointId = useEwsStore((s) => s.setSelectedPointId);
	const stateFilter = useEwsStore((s) => s.stateFilter);
	const setStateFilter = useEwsStore((s) => s.setStateFilter);
	const hazardFilter = useEwsStore((s) => s.hazardFilter);
	const setHazardFilter = useEwsStore((s) => s.setHazardFilter);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		return points.filter((p) => {
			if (stateFilter !== "all" && p.state !== stateFilter) return false;
			if (hazardFilter === "high" && p.hazard !== 1) return false;
			if (hazardFilter === "low" && p.hazard !== 0) return false;
			return true;
		});
	}, [
		points,
		stateFilter,
		hazardFilter
	]);
	const selected = points.find((p) => p.id === selectedPointId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: `Geospatial hazard field · ${filtered.length}/${DISTRICT_COUNT} cells`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 rounded-sm bg-surface-2 p-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: mapView === "gis" ? "subtle" : "ghost",
						onClick: () => setMapView("gis"),
						"aria-pressed": mapView === "gis",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, {}), "GIS"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: mapView === "scatter3d" ? "subtle" : "ghost",
						onClick: () => setMapView("scatter3d"),
						"aria-pressed": mapView === "scatter3d",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareDashed, {}), "3D field"]
					})]
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectNative, {
							value: stateFilter,
							onChange: (e) => setStateFilter(e.target.value),
							className: "w-auto min-w-40",
							"aria-label": "Filter by state",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All 8 NER states"
							}), NER_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectNative, {
							value: hazardFilter,
							onChange: (e) => setHazardFilter(e.target.value),
							className: "w-auto min-w-36",
							"aria-label": "Filter by hazard class",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All classes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "high",
									children: "High (class 1)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "low",
									children: "Low (class 0)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-3 text-xs uppercase tracking-wider text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 rounded-full bg-hazard-high" }), " High"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 rounded-full bg-hazard-mid" }), " Watch"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 rounded-full bg-hazard-low" }), " Low"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[min(58vh,640px)] min-h-72 overflow-hidden rounded-md bg-bg",
					children: ready ? mapView === "gis" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GisMap, {
						points: filtered,
						selectedId: selectedPointId,
						onSelect: setSelectedPointId
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter3d, {
						points: filtered,
						selectedId: selectedPointId,
						onSelect: setSelectedPointId
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center text-sm text-muted",
						children: "Loading spatial field…"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Selected cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointDetail, { point: selected })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgencyPanel, {
					mode,
					tick
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorridorPanel, { corridors }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiverPanel, { rivers })
			]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = object({
	accountSid: string().min(8),
	authToken: string().min(8),
	from: string().min(8),
	to: string().min(8),
	body: string().min(1).max(1600)
});
var sendTwilioSms = createServerFn({ method: "POST" }).validator(schema).handler(createSsrRpc("bf4f87b00fb5df32aa351bc31caf5d5865ead446229428219e29a678d7875fac"));
function parseNumbers(raw) {
	return raw.split(/[\n,;]+/).map((s) => s.trim()).filter((s) => /^\+?\d{8,15}$/.test(s.replace(/[\s-]/g, ""))).map((s) => s.replace(/[\s-]/g, ""));
}
function buildAlertBody(threat, high) {
	const top = high.slice().sort((a, b) => b.proba - a.proba).slice(0, 4);
	const cells = top.length === 0 ? "No class-1 cells currently." : top.map((p) => `${p.district} (${p.state}, P=${p.proba.toFixed(2)})`).join("; ");
	return [
		"NER LANDSLIDE EWS / MDoNER-SIH26001",
		`STATUS: ${threat}`,
		`HIGH-RISK CELLS: ${cells}`,
		"Avoid marked NH corridors. Follow local SDMA / BRO instructions. Do not travel cut-slopes after intense rain."
	].join("\n");
}
function SmsTab({ points, threat }) {
	const sid = useEwsStore((s) => s.smsSid);
	const token = useEwsStore((s) => s.smsToken);
	const from = useEwsStore((s) => s.smsFrom);
	const contacts = useEwsStore((s) => s.smsContacts);
	const log = useEwsStore((s) => s.smsLog);
	const busy = useEwsStore((s) => s.smsBusy);
	const setSmsSid = useEwsStore((s) => s.setSmsSid);
	const setSmsToken = useEwsStore((s) => s.setSmsToken);
	const setSmsFrom = useEwsStore((s) => s.setSmsFrom);
	const setSmsContacts = useEwsStore((s) => s.setSmsContacts);
	const pushSmsLog = useEwsStore((s) => s.pushSmsLog);
	const setSmsBusy = useEwsStore((s) => s.setSmsBusy);
	const body = buildAlertBody(threat, points.filter((p) => p.hazard === 1));
	const numbers = parseNumbers(contacts);
	const liveReady = sid.length > 8 && token.length > 8 && from.length > 8;
	async function broadcast() {
		if (!numbers.length) return;
		setSmsBusy(true);
		const rows = [];
		for (const to of numbers) {
			const id = `sms-${Date.now()}-${to}`;
			if (!liveReady) {
				rows.push({
					id,
					to,
					body,
					channel: "mock",
					status: "sent",
					at: (/* @__PURE__ */ new Date()).toISOString()
				});
				continue;
			}
			try {
				const res = await sendTwilioSms({ data: {
					accountSid: sid,
					authToken: token,
					from,
					to,
					body
				} });
				rows.push({
					id,
					to,
					body,
					channel: "twilio",
					status: res.ok ? "sent" : "failed",
					error: res.ok ? void 0 : res.error,
					at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (err) {
				rows.push({
					id,
					to,
					body,
					channel: "twilio",
					status: "failed",
					error: err instanceof Error ? err.message : "Twilio call failed",
					at: (/* @__PURE__ */ new Date()).toISOString()
				});
			}
		}
		pushSmsLog(rows);
		setSmsBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 gap-3 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Twilio setup",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Account SID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: sid,
								onChange: (e) => setSmsSid(e.target.value),
								autoComplete: "off",
								placeholder: "ACxxxxxxxx"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Auth token",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: token,
								onChange: (e) => setSmsToken(e.target.value),
								autoComplete: "off"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sender number",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: from,
								onChange: (e) => setSmsFrom(e.target.value),
								placeholder: "+1234567890"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Leave blank to preview a formatted geofenced alert without sending. With credentials, each number is posted to the Twilio Messages API."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Target mobile directory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Numbers (one per line)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: contacts,
						onChange: (e) => setSmsContacts(e.target.value),
						rows: 6,
						className: "font-mono text-sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [
						numbers.length,
						" valid target",
						numbers.length === 1 ? "" : "s"
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Mass dispatch",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: liveReady ? "ok" : "default",
					children: liveReady ? "Twilio live" : "Mock"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "max-h-56 overflow-auto rounded-md bg-surface-2 p-3 font-mono text-xs leading-relaxed text-fg whitespace-pre-wrap",
					children: body
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-3 w-full",
					variant: "invert",
					disabled: busy || numbers.length === 0,
					onClick: () => void broadcast(),
					children: busy ? "Dispatching…" : "Broadcast mass geofenced SMS"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Dispatch log",
				children: log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No messages yet. Broadcast to see the exact payload per number."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: log.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-surface-2 px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm",
									children: row.to
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: row.status === "sent" ? "ok" : "danger",
									children: [
										row.channel,
										" · ",
										row.status
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "mt-2 whitespace-pre-wrap font-mono text-[11px] text-muted",
								children: row.body
							}),
							row.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-danger",
								children: row.error
							}) : null
						]
					}, row.id))
				})
			})]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-surface-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-accent" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full bg-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60" })]
}));
Slider.displayName = Slider$1.displayName;
function WeatherTab({ points }) {
	const mode = useEwsStore((s) => s.mode);
	const setMode = useEwsStore((s) => s.setMode);
	const rain24 = useEwsStore((s) => s.rain24);
	const rain72 = useEwsStore((s) => s.rain72);
	const soil = useEwsStore((s) => s.soil);
	const setRain24 = useEwsStore((s) => s.setRain24);
	const setRain72 = useEwsStore((s) => s.setRain72);
	const setSoil = useEwsStore((s) => s.setSoil);
	const cloudburstState = useEwsStore((s) => s.cloudburstState);
	const cloudburstDistrict = useEwsStore((s) => s.cloudburstDistrict);
	const setCloudburstTarget = useEwsStore((s) => s.setCloudburstTarget);
	const triggerCloudburst = useEwsStore((s) => s.triggerCloudburst);
	const clearCloudbursts = useEwsStore((s) => s.clearCloudbursts);
	const cloudbursts = useEwsStore((s) => s.cloudbursts);
	const districts = districtsForState(cloudburstState);
	const high = points.filter((p) => p.hazard === 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 gap-3 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Data stream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("live"),
							className: `rounded-md px-4 py-3 text-left shadow-[var(--shadow-border)] transition-colors duration-150 ${mode === "live" ? "bg-surface-2 text-fg" : "bg-transparent text-muted hover:text-fg"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: "Multi-agency live stream"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "NASA GPM / Sentinel-1 / IMD fused climatology"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("simulation"),
							className: `rounded-md px-4 py-3 text-left shadow-[var(--shadow-border)] transition-colors duration-150 ${mode === "simulation" ? "bg-surface-2 text-fg" : "bg-transparent text-muted hover:text-fg"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: "Interactive simulation engine"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "Force rainfall and soil, then re-score the forest"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Live weather adjustment",
					action: mode === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Locked in live mode" }) : null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
								label: "24-hour rainfall",
								value: `${rain24.toFixed(0)} mm`,
								min: 0,
								max: 300,
								step: 1,
								disabled: mode === "live",
								sliderValue: rain24,
								onChange: setRain24
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
								label: "72-hour cumulative rainfall",
								value: `${rain72.toFixed(0)} mm`,
								min: 0,
								max: 600,
								step: 2,
								disabled: mode === "live",
								sliderValue: rain72,
								onChange: setRain72
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
								label: "Soil saturation index",
								value: soil.toFixed(2),
								min: 0,
								max: 1,
								step: .01,
								disabled: mode === "live",
								sliderValue: soil,
								onChange: setSoil
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Localized cloudburst injector",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Target state" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNative, {
									value: cloudburstState,
									onChange: (e) => {
										const st = e.target.value;
										const first = districtsForState(st)[0]?.name ?? "";
										setCloudburstTarget(st, first);
									},
									children: NER_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s
									}, s))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Target district" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNative, {
									value: cloudburstDistrict,
									onChange: (e) => setCloudburstTarget(cloudburstState, e.target.value),
									children: districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: d.name,
										children: d.name
									}, d.name))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Injects +250 mm (24h), +450 mm (72h) and soil 0.99 over the cell, then re-runs the forest."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								onClick: triggerCloudburst,
								children: "Trigger cloudburst event"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: clearCloudbursts,
								disabled: !cloudbursts.length,
								children: "Clear events"
							})]
						}),
						cloudbursts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-sm text-muted",
							children: cloudbursts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Active: ",
								c.district,
								", ",
								c.state
							] }, `${c.state}-${c.district}`))
						}) : null
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Random forest model card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "Estimators",
								v: String(MODEL_CARD.nEstimators)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "Max depth",
								v: String(MODEL_CARD.maxDepth)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "Train samples",
								v: String(MODEL_CARD.nSamples)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "Holdout accuracy",
								v: `${(MODEL_CARD.holdoutAccuracy * 100).toFixed(1)}%`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[11px] uppercase tracking-wider text-muted",
						children: "Split importance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-2",
						children: MODEL_CARD.importance.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular text-fg",
								children: [(f.value * 100).toFixed(0), "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-accent",
								style: { width: `${f.value * 100}%` }
							})
						})] }, f.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-faint",
						children: "Features: Slope_Angle, Rain_24h, Rain_72h, Soil_Saturation. Trained in-memory on synthetic NER terrain; predictions refresh on every slider, cloudburst, or high-severity report."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Re-scored high-hazard cells",
				children: high.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No class-1 cells at this forcing. Raise rainfall or inject a cloudburst."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-[360px] space-y-1 overflow-auto text-sm",
					children: high.slice().sort((a, b) => b.proba - a.proba).slice(0, 18).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-2 rounded-sm px-1 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.district, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs text-muted",
							children: p.state
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular text-danger",
							children: p.proba.toFixed(2)
						})]
					}, p.id))
				})
			})]
		})]
	});
}
function SliderRow({ label, value, min, max, step, disabled, sliderValue, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: disabled ? "opacity-45" : "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-sm text-fg",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			min,
			max,
			step,
			value: [sliderValue],
			disabled,
			onValueChange: (v) => onChange(v[0] ?? min)
		})]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] uppercase tracking-wider text-faint",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "tabular text-lg text-fg",
		children: v
	})] });
}
var TABS = [
	{
		id: "map",
		label: "GIS risk map",
		icon: MapPinned
	},
	{
		id: "incidents",
		label: "Citizen reports",
		icon: Radio
	},
	{
		id: "weather",
		label: "Weather & cloudburst",
		icon: CloudRain
	},
	{
		id: "sms",
		label: "SMS alert center",
		icon: Siren
	}
];
function Dashboard() {
	const tab = useEwsStore((s) => s.tab);
	const setTab = useEwsStore((s) => s.setTab);
	const mode = useEwsStore((s) => s.mode);
	const tick = useEwsStore((s) => s.tick);
	const bumpTick = useEwsStore((s) => s.bumpTick);
	const setHydrated = useEwsStore((s) => s.setHydrated);
	const field = useHazardField();
	const [clock, setClock] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		useEwsStore.persist.rehydrate();
		setHydrated(true);
		setClock(formatIST());
		const clockId = window.setInterval(() => setClock(formatIST()), 1e3);
		const tickId = window.setInterval(() => {
			if (useEwsStore.getState().mode === "live") bumpTick();
		}, 12e3);
		return () => {
			window.clearInterval(clockId);
			window.clearInterval(tickId);
		};
	}, [bumpTick, setHydrated]);
	const threatTone = field.threat === "CRITICAL WARNING" ? "danger" : field.threat === "WATCH" ? "warn" : "ok";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border px-4 py-3 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
						children: "MDoNER · SIH26001 · North Eastern Region"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-2xl leading-none tracking-tight sm:text-3xl",
						children: "Landslide Early Warning System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 max-w-xl text-sm text-muted",
						children: [
							"Fused ISRO / Copernicus / NASA GPM / IMD picture with an in-memory random forest over ",
							DISTRICT_COUNT,
							" ",
							"monitoring cells."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-end gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: threatTone,
							children: field.threat
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: mode === "live" ? "ok" : "accent",
							children: mode === "live" ? "Live satellite" : "Simulated"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-xs text-faint",
						children: clock ? `${clock} IST` : "\xA0"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiStrip, {
					highRisk: field.highRisk,
					threat: field.threat,
					mode,
					coverage: DISTRICT_COUNT
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1 overflow-x-auto rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]",
					children: TABS.map((t) => {
						const Icon = t.icon;
						const active = tab === t.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: `flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${active ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t.label
							})]
						}, t.id);
					})
				}),
				tab === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapTab, {
					points: field.points,
					corridors: field.corridors,
					rivers: field.rivers,
					mode,
					tick
				}) : null,
				tab === "incidents" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncidentTab, { points: field.points }) : null,
				tab === "weather" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherTab, { points: field.points }) : null,
				tab === "sms" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmsTab, {
					points: field.points,
					threat: field.threat
				}) : null
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {});
}
//#endregion
export { Home as component };
