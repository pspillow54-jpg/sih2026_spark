import type { ModelCard } from "./types";

export const FEATURE_NAMES = [
  "Slope_Angle",
  "Rain_24h",
  "Rain_72h",
  "Soil_Saturation",
] as const;

export type FeatureVec = [number, number, number, number];

type Row = { x: FeatureVec; y: 0 | 1 };

type Node = {
  leaf?: boolean;
  proba?: number;
  feat?: number;
  thr?: number;
  left?: Node;
  right?: Node;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Physics-informed landslide likelihood used to label synthetic NER terrain. */
export function physicsScore(x: FeatureVec) {
  const slope = clamp01((x[0] - 14) / 48);
  const r24 = clamp01((x[1] - 35) / 230);
  const r72 = clamp01((x[2] - 70) / 420);
  const soil = clamp01(x[3]);
  const interact = slope * soil * 0.18 + r24 * r72 * 0.1;
  return clamp01(0.3 * slope + 0.26 * r24 + 0.24 * r72 + 0.16 * soil + interact);
}

function synthesize(n: number, rng: () => number): Row[] {
  const rows: Row[] = [];
  for (let i = 0; i < n; i++) {
    const slope = 8 + rng() * 58;
    const rain24 = rng() * 300;
    const rain72 = rain24 + rng() * 320;
    const soil = clamp01(0.12 + rain72 / 900 + rng() * 0.35 + (slope > 40 ? 0.08 : 0));
    const x: FeatureVec = [slope, rain24, rain72, soil];
    const p = physicsScore(x);
    const noise = rng() < 0.07 ? (rng() < 0.5 ? 0 : 1) : p > 0.52 ? 1 : 0;
    rows.push({ x, y: noise as 0 | 1 });
  }
  return rows;
}

function gini(ys: number[]) {
  if (!ys.length) return 0;
  let p = 0;
  for (const y of ys) p += y;
  p /= ys.length;
  return 2 * p * (1 - p);
}

function majority(ys: number[]) {
  let s = 0;
  for (const y of ys) s += y;
  const proba = ys.length ? s / ys.length : 0;
  return { proba, leaf: (proba >= 0.5 ? 1 : 0) as 0 | 1 };
}

function uniqueThresholds(vals: number[], rng: () => number) {
  const sorted = [...vals].sort((a, b) => a - b);
  const out: number[] = [];
  const cap = Math.min(24, sorted.length - 1);
  if (sorted.length < 2) return out;
  const step = Math.max(1, Math.floor((sorted.length - 1) / cap));
  for (let i = step; i < sorted.length; i += step) {
    const a = sorted[i - 1]!;
    const b = sorted[i]!;
    if (b > a) out.push((a + b) / 2);
  }
  if (!out.length) out.push(sorted[Math.floor(rng() * sorted.length)]!);
  return out;
}

function grow(
  rows: Row[],
  depth: number,
  maxDepth: number,
  minLeaf: number,
  rng: () => number,
): Node {
  const ys = rows.map((r) => r.y);
  const { proba } = majority(ys);
  if (depth >= maxDepth || rows.length <= minLeaf || gini(ys) < 0.02) {
    return { leaf: true, proba };
  }

  const featOrder = [0, 1, 2, 3];
  for (let i = featOrder.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = featOrder[i]!;
    featOrder[i] = featOrder[j]!;
    featOrder[j] = tmp;
  }
  const k = 2;
  const tryFeats = featOrder.slice(0, k);

  let bestGain = -1;
  let bestFeat = 0;
  let bestThr = 0;
  let bestLeft: Row[] = [];
  let bestRight: Row[] = [];
  const parent = gini(ys);

  for (const f of tryFeats) {
    const thrs = uniqueThresholds(
      rows.map((r) => r.x[f]!),
      rng,
    );
    for (const thr of thrs) {
      const left: Row[] = [];
      const right: Row[] = [];
      for (const r of rows) (r.x[f]! <= thr ? left : right).push(r);
      if (left.length < minLeaf || right.length < minLeaf) continue;
      const gain =
        parent -
        (left.length / rows.length) * gini(left.map((r) => r.y)) -
        (right.length / rows.length) * gini(right.map((r) => r.y));
      if (gain > bestGain) {
        bestGain = gain;
        bestFeat = f;
        bestThr = thr;
        bestLeft = left;
        bestRight = right;
      }
    }
  }

  if (bestGain < 0.001 || !bestLeft.length || !bestRight.length) {
    return { leaf: true, proba };
  }

  return {
    leaf: false,
    feat: bestFeat,
    thr: bestThr,
    left: grow(bestLeft, depth + 1, maxDepth, minLeaf, rng),
    right: grow(bestRight, depth + 1, maxDepth, minLeaf, rng),
  };
}

function walk(node: Node, x: FeatureVec): number {
  if (node.leaf || node.feat === undefined || node.thr === undefined) {
    return node.proba ?? 0;
  }
  const branch = x[node.feat]! <= node.thr ? node.left : node.right;
  return branch ? walk(branch, x) : (node.proba ?? 0);
}

function bootstrap(rows: Row[], rng: () => number) {
  const out: Row[] = [];
  for (let i = 0; i < rows.length; i++) {
    out.push(rows[Math.floor(rng() * rows.length)]!);
  }
  return out;
}

const N_ESTIMATORS = 28;
const MAX_DEPTH = 6;
const N_SAMPLES = 720;
const SEED = 26001;

function train() {
  const rng = mulberry32(SEED);
  const data = synthesize(N_SAMPLES, rng);
  const split = Math.floor(data.length * 0.8);
  const trainSet = data.slice(0, split);
  const testSet = data.slice(split);

  const trees: Node[] = [];
  const impurityDrop = [0, 0, 0, 0];

  for (let t = 0; t < N_ESTIMATORS; t++) {
    const bag = bootstrap(trainSet, rng);
    const tree = grow(bag, 0, MAX_DEPTH, 8, rng);
    trees.push(tree);
    // crude importance: count split usage weighted by depth proxy
    const stack: Node[] = [tree];
    while (stack.length) {
      const n = stack.pop()!;
      if (!n.leaf && n.feat !== undefined) impurityDrop[n.feat]! += 1;
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
    }
  }

  const predictProba = (x: FeatureVec) => {
    let s = 0;
    for (const tree of trees) s += walk(tree, x);
    return s / trees.length;
  };

  let correct = 0;
  for (const row of testSet) {
    const yhat = predictProba(row.x) >= 0.5 ? 1 : 0;
    if (yhat === row.y) correct++;
  }

  const impSum = impurityDrop.reduce((a, b) => a + b, 0) || 1;
  const card: ModelCard = {
    nEstimators: N_ESTIMATORS,
    maxDepth: MAX_DEPTH,
    nSamples: N_SAMPLES,
    holdoutAccuracy: correct / testSet.length,
    importance: FEATURE_NAMES.map((name, i) => ({
      name,
      value: impurityDrop[i]! / impSum,
    })),
  };

  return { predictProba, card };
}

const MODEL = train();

export const MODEL_CARD = MODEL.card;

export function predictHazard(x: FeatureVec) {
  const proba = MODEL.predictProba(x);
  const hazard = (proba >= 0.5 ? 1 : 0) as 0 | 1;
  return { proba, hazard };
}
