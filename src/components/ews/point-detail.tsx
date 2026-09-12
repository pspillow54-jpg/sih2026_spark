import type { HazardPoint } from "@/lib/ews/types";
import { Badge } from "@/components/ui/badge";

export function PointDetail({ point }: { point: HazardPoint | undefined }) {
  if (!point) {
    return <p className="px-1 text-sm text-muted">Select a grid cell on the map for the model readout.</p>;
  }
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display text-xl leading-tight">{point.district}</p>
          <p className="text-sm text-muted">{point.state}</p>
        </div>
        <Badge tone={point.hazard === 1 ? "danger" : "ok"}>
          {point.hazard === 1 ? "Class 1 High" : "Class 0 Low"}
        </Badge>
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <Row k="Slope angle" v={`${point.slope.toFixed(1)}°`} />
        <Row k="24h rainfall" v={`${point.rain24.toFixed(1)} mm`} />
        <Row k="72h rainfall" v={`${point.rain72.toFixed(1)} mm`} />
        <Row k="Soil saturation" v={point.soil.toFixed(2)} />
        <Row k="P(hazard)" v={point.proba.toFixed(3)} />
        <Row k="Terrain" v={point.terrain} />
      </dl>
      <div className="flex flex-wrap gap-1.5">
        {point.cloudburst ? <Badge tone="danger">Cloudburst cell</Badge> : null}
        {point.boosted ? <Badge tone="warn">Citizen reinforcement</Badge> : null}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-faint">{k}</dt>
      <dd className="tabular text-fg">{v}</dd>
    </div>
  );
}
