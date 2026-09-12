import { useEffect, useState } from "react";
import { CloudRain, MapPinned, Radio, Siren } from "lucide-react";
import { DISTRICT_COUNT } from "@/lib/ews/districts";
import { useEwsStore, type TabId } from "@/lib/ews/store";
import { useHazardField } from "@/lib/ews/use-field";
import { formatIST } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { IncidentTab } from "./incident-tab";
import { KpiStrip } from "./kpi-strip";
import { MapTab } from "./map-tab";
import { SmsTab } from "./sms-tab";
import { WeatherTab } from "./weather-tab";

const TABS: { id: TabId; label: string; icon: typeof MapPinned }[] = [
  { id: "map", label: "GIS risk map", icon: MapPinned },
  { id: "incidents", label: "Citizen reports", icon: Radio },
  { id: "weather", label: "Weather & cloudburst", icon: CloudRain },
  { id: "sms", label: "SMS alert center", icon: Siren },
];

export function Dashboard() {
  const tab = useEwsStore((s) => s.tab);
  const setTab = useEwsStore((s) => s.setTab);
  const mode = useEwsStore((s) => s.mode);
  const tick = useEwsStore((s) => s.tick);
  const bumpTick = useEwsStore((s) => s.bumpTick);
  const setHydrated = useEwsStore((s) => s.setHydrated);
  const field = useHazardField();
  const [clock, setClock] = useState("");

  useEffect(() => {
    void useEwsStore.persist.rehydrate();
    setHydrated(true);
    setClock(formatIST());
    const clockId = window.setInterval(() => setClock(formatIST()), 1000);
    const tickId = window.setInterval(() => {
      if (useEwsStore.getState().mode === "live") bumpTick();
    }, 12000);
    return () => {
      window.clearInterval(clockId);
      window.clearInterval(tickId);
    };
  }, [bumpTick, setHydrated]);

  const threatTone =
    field.threat === "CRITICAL WARNING" ? "danger" : field.threat === "WATCH" ? "warn" : "ok";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              MDoNER · SIH26001 · North Eastern Region
            </p>
            <h1 className="mt-1 font-display text-2xl leading-none tracking-tight sm:text-3xl">
              Landslide Early Warning System
            </h1>
            <p className="mt-1.5 max-w-xl text-sm text-muted">
              Fused ISRO / Copernicus / NASA GPM / IMD picture with an in-memory random forest over {DISTRICT_COUNT}{" "}
              monitoring cells.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-wrap justify-end gap-1.5">
              <Badge tone={threatTone}>{field.threat}</Badge>
              <Badge tone={mode === "live" ? "ok" : "accent"}>
                {mode === "live" ? "Live satellite" : "Simulated"}
              </Badge>
            </div>
            <p className="tabular text-xs text-faint">{clock ? `${clock} IST` : "\u00a0"}</p>
          </div>
        </div>
      </header>

      <div className="space-y-3 px-4 py-3 sm:px-6">
        <KpiStrip
          highRisk={field.highRisk}
          threat={field.threat}
          mode={mode}
          coverage={DISTRICT_COUNT}
        />

        <nav className="flex gap-1 overflow-x-auto rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                  active ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span className="truncate">{t.label}</span>
              </button>
            );
          })}
        </nav>

        {tab === "map" ? (
          <MapTab
            points={field.points}
            corridors={field.corridors}
            rivers={field.rivers}
            mode={mode}
            tick={tick}
          />
        ) : null}
        {tab === "incidents" ? <IncidentTab points={field.points} /> : null}
        {tab === "weather" ? <WeatherTab points={field.points} /> : null}
        {tab === "sms" ? <SmsTab points={field.points} threat={field.threat} /> : null}
      </div>
    </div>
  );
}
