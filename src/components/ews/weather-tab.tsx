import { districtsForState } from "@/lib/ews/districts";
import { MODEL_CARD } from "@/lib/ews/ml";
import { useEwsStore } from "@/lib/ews/store";
import { NER_STATES, type HazardPoint, type NerState } from "@/lib/ews/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { Slider } from "@/components/ui/slider";
import { Panel } from "./panel";

export function WeatherTab({ points }: { points: HazardPoint[] }) {
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

  return (
    <div className="grid min-h-0 gap-3 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="flex flex-col gap-3">
        <Panel title="Data stream">
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("live")}
              className={`rounded-md px-4 py-3 text-left shadow-[var(--shadow-border)] transition-colors duration-150 ${
                mode === "live" ? "bg-surface-2 text-fg" : "bg-transparent text-muted hover:text-fg"
              }`}
            >
              <p className="text-sm font-medium text-fg">Multi-agency live stream</p>
              <p className="mt-1 text-xs text-muted">NASA GPM / Sentinel-1 / IMD fused climatology</p>
            </button>
            <button
              type="button"
              onClick={() => setMode("simulation")}
              className={`rounded-md px-4 py-3 text-left shadow-[var(--shadow-border)] transition-colors duration-150 ${
                mode === "simulation" ? "bg-surface-2 text-fg" : "bg-transparent text-muted hover:text-fg"
              }`}
            >
              <p className="text-sm font-medium text-fg">Interactive simulation engine</p>
              <p className="mt-1 text-xs text-muted">Force rainfall and soil, then re-score the forest</p>
            </button>
          </div>
        </Panel>

        <Panel
          title="Live weather adjustment"
          action={mode === "live" ? <Badge>Locked in live mode</Badge> : null}
        >
          <div className="space-y-5">
            <SliderRow
              label="24-hour rainfall"
              value={`${rain24.toFixed(0)} mm`}
              min={0}
              max={300}
              step={1}
              disabled={mode === "live"}
              sliderValue={rain24}
              onChange={setRain24}
            />
            <SliderRow
              label="72-hour cumulative rainfall"
              value={`${rain72.toFixed(0)} mm`}
              min={0}
              max={600}
              step={2}
              disabled={mode === "live"}
              sliderValue={rain72}
              onChange={setRain72}
            />
            <SliderRow
              label="Soil saturation index"
              value={soil.toFixed(2)}
              min={0}
              max={1}
              step={0.01}
              disabled={mode === "live"}
              sliderValue={soil}
              onChange={setSoil}
            />
          </div>
        </Panel>

        <Panel title="Localized cloudburst injector">
          <div className="grid grid-cols-2 gap-2">
            <label className="space-y-1.5">
              <Label>Target state</Label>
              <SelectNative
                value={cloudburstState}
                onChange={(e) => {
                  const st = e.target.value as NerState;
                  const first = districtsForState(st)[0]?.name ?? "";
                  setCloudburstTarget(st, first);
                }}
              >
                {NER_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </SelectNative>
            </label>
            <label className="space-y-1.5">
              <Label>Target district</Label>
              <SelectNative
                value={cloudburstDistrict}
                onChange={(e) => setCloudburstTarget(cloudburstState, e.target.value)}
              >
                {districts.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </SelectNative>
            </label>
          </div>
          <p className="mt-3 text-sm text-muted">
            Injects +250 mm (24h), +450 mm (72h) and soil 0.99 over the cell, then re-runs the forest.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button variant="danger" onClick={triggerCloudburst}>
              Trigger cloudburst event
            </Button>
            <Button variant="ghost" onClick={clearCloudbursts} disabled={!cloudbursts.length}>
              Clear events
            </Button>
          </div>
          {cloudbursts.length ? (
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {cloudbursts.map((c) => (
                <li key={`${c.state}-${c.district}`}>
                  Active: {c.district}, {c.state}
                </li>
              ))}
            </ul>
          ) : null}
        </Panel>
      </div>

      <div className="flex flex-col gap-3">
        <Panel title="Random forest model card">
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <Stat k="Estimators" v={String(MODEL_CARD.nEstimators)} />
            <Stat k="Max depth" v={String(MODEL_CARD.maxDepth)} />
            <Stat k="Train samples" v={String(MODEL_CARD.nSamples)} />
            <Stat k="Holdout accuracy" v={`${(MODEL_CARD.holdoutAccuracy * 100).toFixed(1)}%`} />
          </dl>
          <p className="mt-4 text-[11px] uppercase tracking-wider text-muted">Split importance</p>
          <ul className="mt-2 space-y-2">
            {MODEL_CARD.importance.map((f) => (
              <li key={f.name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted">{f.name}</span>
                  <span className="tabular text-fg">{(f.value * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full bg-accent" style={{ width: `${f.value * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-faint">
            Features: Slope_Angle, Rain_24h, Rain_72h, Soil_Saturation. Trained in-memory on synthetic NER
            terrain; predictions refresh on every slider, cloudburst, or high-severity report.
          </p>
        </Panel>
        <Panel title="Re-scored high-hazard cells">
          {high.length === 0 ? (
            <p className="text-sm text-muted">No class-1 cells at this forcing. Raise rainfall or inject a cloudburst.</p>
          ) : (
            <ul className="max-h-[360px] space-y-1 overflow-auto text-sm">
              {high
                .slice()
                .sort((a, b) => b.proba - a.proba)
                .slice(0, 18)
                .map((p) => (
                  <li key={p.id} className="flex items-center justify-between gap-2 rounded-sm px-1 py-1.5">
                    <span>
                      {p.district}
                      <span className="ml-2 text-xs text-muted">{p.state}</span>
                    </span>
                    <span className="tabular text-danger">{p.proba.toFixed(2)}</span>
                  </li>
                ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  disabled,
  sliderValue,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
  sliderValue: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className={disabled ? "opacity-45" : ""}>
      <div className="mb-2 flex items-center justify-between">
        <Label>{label}</Label>
        <span className="tabular text-sm text-fg">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[sliderValue]}
        disabled={disabled}
        onValueChange={(v) => onChange(v[0] ?? min)}
      />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-faint">{k}</dt>
      <dd className="tabular text-lg text-fg">{v}</dd>
    </div>
  );
}
