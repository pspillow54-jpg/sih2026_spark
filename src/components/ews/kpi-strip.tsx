import type { ReactNode } from "react";
import { DISTRICT_COUNT } from "@/lib/ews/districts";
import type { DataMode, ThreatLevel } from "@/lib/ews/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function KpiStrip({
  highRisk,
  threat,
  mode,
  coverage,
}: {
  highRisk: number;
  threat: ThreatLevel;
  mode: DataMode;
  coverage: number;
}) {
  const threatTone = threat === "CRITICAL WARNING" ? "danger" : threat === "WATCH" ? "warn" : "ok";
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      <Kpi
        label="Monitored coverage"
        value="8 NER States"
        sub={`${coverage || DISTRICT_COUNT} districts / cells`}
      />
      <Kpi
        label="High-risk points"
        value={String(highRisk).padStart(2, "0")}
        sub="Random forest class 1"
        warn={highRisk > 0}
      />
      <Kpi
        label="Threat status"
        value={threat === "CRITICAL WARNING" ? "CRITICAL" : threat}
        sub={threat === "CRITICAL WARNING" ? "WARNING" : "operating picture"}
        badge={<Badge tone={threatTone}>{threat}</Badge>}
      />
      <Kpi
        label="Data source"
        value={mode === "live" ? "LIVE" : "SIM"}
        sub={mode === "live" ? "Multi-agency satellite stream" : "Interactive simulation engine"}
        live={mode === "live"}
      />
    </div>
  );
}

function Kpi({
  label,
  value,
  sub,
  badge,
  warn,
  live,
}: {
  label: string;
  value: string;
  sub: string;
  badge?: ReactNode;
  warn?: boolean;
  live?: boolean;
}) {
  return (
    <article className="rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{label}</p>
        {live ? (
          <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-ok">
            <span className="live-dot size-1.5 rounded-full bg-ok" />
            Satellite
          </span>
        ) : null}
      </div>
      <p
        className={cn(
          "mt-2 font-display text-2xl leading-none tracking-tight",
          warn ? "text-danger" : "text-fg",
        )}
      >
        {value}
      </p>
      <div className="mt-1.5 flex items-center justify-between gap-2">
        <p className="text-xs text-muted">{sub}</p>
        {badge}
      </div>
    </article>
  );
}
