import { agencyFeeds } from "@/lib/ews/agencies";
import type { CorridorStatus, DataMode, RiverGauge } from "@/lib/ews/types";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Panel } from "./panel";

export function AgencyPanel({ mode, tick }: { mode: DataMode; tick: number }) {
  const feeds = agencyFeeds(mode, tick);
  return (
    <Panel title="Connected agency pipeline">
      <ul className="space-y-2">
        {feeds.map((f) => (
          <li key={f.id} className="flex items-start justify-between gap-3 rounded-md bg-surface-2 px-3 py-2">
            <div className="min-w-0">
              <p className="truncate text-sm text-fg">{f.name}</p>
              <p className="truncate text-xs text-muted">
                {f.layer} · {f.cadence}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <Badge tone={f.status === "degraded" ? "warn" : "ok"}>{f.status}</Badge>
              <p className="mt-1 text-[11px] text-faint">{f.lag}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function CorridorPanel({ corridors }: { corridors: CorridorStatus[] }) {
  return (
    <Panel title="Critical transport corridors">
      <ul className="space-y-3">
        {corridors.map((c) => {
          const pct = Math.round(c.risk * 100);
          const tone = c.tag === "restricted" ? "danger" : c.tag === "watch" ? "warn" : "ok";
          return (
            <li key={c.id}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-fg">
                    {c.name}
                    <span className="ml-2 text-xs text-muted">{c.stretch}</span>
                  </p>
                </div>
                <Badge tone={tone}>{c.tag}</Badge>
              </div>
              <Progress value={pct} tone={tone} />
              <p className="mt-1 text-[11px] tabular text-faint">{pct}% corridor hazard</p>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}

export function RiverPanel({ rivers }: { rivers: RiverGauge[] }) {
  return (
    <Panel title="Hydrological river levels">
      <ul className="space-y-3">
        {rivers.map((r) => {
          const pct = Math.round((r.level / r.danger) * 100);
          const over = pct >= 100;
          const tone = over ? "danger" : pct >= 80 ? "warn" : "ok";
          return (
            <li key={r.id}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-fg">{r.name}</p>
                  <p className="text-[11px] text-muted">{r.station}</p>
                </div>
                <div className="text-right">
                  <p className="tabular text-sm text-fg">
                    {r.level.toFixed(2)}
                    <span className="ml-1 text-xs text-muted">{r.unit}</span>
                  </p>
                  <p className="text-[11px] text-faint">
                    danger {r.danger} · {r.trend}
                  </p>
                </div>
              </div>
              <Progress value={Math.min(100, pct)} tone={tone} />
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
