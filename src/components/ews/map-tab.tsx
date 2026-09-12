import { useEffect, useMemo, useState } from "react";
import { BoxSelect, Map as MapIcon } from "lucide-react";
import { DISTRICT_COUNT } from "@/lib/ews/districts";
import { useEwsStore } from "@/lib/ews/store";
import { NER_STATES, type HazardPoint } from "@/lib/ews/types";
import { Button } from "@/components/ui/button";
import { SelectNative } from "@/components/ui/select-native";
import { AgencyPanel, CorridorPanel, RiverPanel } from "./side-panels";
import { GisMap } from "./gis-map";
import { Panel } from "./panel";
import { PointDetail } from "./point-detail";
import { Scatter3d } from "./scatter-3d";
import type { CorridorStatus, DataMode, RiverGauge } from "@/lib/ews/types";

export function MapTab({
  points,
  corridors,
  rivers,
  mode,
  tick,
}: {
  points: HazardPoint[];
  corridors: CorridorStatus[];
  rivers: RiverGauge[];
  mode: DataMode;
  tick: number;
}) {
  const mapView = useEwsStore((s) => s.mapView);
  const setMapView = useEwsStore((s) => s.setMapView);
  const selectedPointId = useEwsStore((s) => s.selectedPointId);
  const setSelectedPointId = useEwsStore((s) => s.setSelectedPointId);
  const stateFilter = useEwsStore((s) => s.stateFilter);
  const setStateFilter = useEwsStore((s) => s.setStateFilter);
  const hazardFilter = useEwsStore((s) => s.hazardFilter);
  const setHazardFilter = useEwsStore((s) => s.setHazardFilter);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const filtered = useMemo(() => {
    return points.filter((p) => {
      if (stateFilter !== "all" && p.state !== stateFilter) return false;
      if (hazardFilter === "high" && p.hazard !== 1) return false;
      if (hazardFilter === "low" && p.hazard !== 0) return false;
      return true;
    });
  }, [points, stateFilter, hazardFilter]);

  const selected = points.find((p) => p.id === selectedPointId);

  return (
    <div className="grid min-h-0 gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
      <div className="flex min-h-0 flex-col gap-3">
        <Panel
          title={`Geospatial hazard field · ${filtered.length}/${DISTRICT_COUNT} cells`}
          action={
            <div className="flex items-center gap-1 rounded-sm bg-surface-2 p-0.5">
              <Button
                size="sm"
                variant={mapView === "gis" ? "subtle" : "ghost"}
                onClick={() => setMapView("gis")}
                aria-pressed={mapView === "gis"}
              >
                <MapIcon />
                GIS
              </Button>
              <Button
                size="sm"
                variant={mapView === "scatter3d" ? "subtle" : "ghost"}
                onClick={() => setMapView("scatter3d")}
                aria-pressed={mapView === "scatter3d"}
              >
                <BoxSelect />
                3D field
              </Button>
            </div>
          }
        >
          <div className="mb-3 flex flex-wrap gap-2">
            <SelectNative
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value as typeof stateFilter)}
              className="w-auto min-w-40"
              aria-label="Filter by state"
            >
              <option value="all">All 8 NER states</option>
              {NER_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </SelectNative>
            <SelectNative
              value={hazardFilter}
              onChange={(e) => setHazardFilter(e.target.value as typeof hazardFilter)}
              className="w-auto min-w-36"
              aria-label="Filter by hazard class"
            >
              <option value="all">All classes</option>
              <option value="high">High (class 1)</option>
              <option value="low">Low (class 0)</option>
            </SelectNative>
            <div className="ml-auto flex items-center gap-3 text-xs uppercase tracking-wider text-muted">
              <span className="flex items-center gap-1.5">
                <i className="size-2 rounded-full bg-hazard-high" /> High
              </span>
              <span className="flex items-center gap-1.5">
                <i className="size-2 rounded-full bg-hazard-mid" /> Watch
              </span>
              <span className="flex items-center gap-1.5">
                <i className="size-2 rounded-full bg-hazard-low" /> Low
              </span>
            </div>
          </div>
          <div className="h-[min(58vh,640px)] min-h-72 overflow-hidden rounded-md bg-bg">
            {ready ? (
              mapView === "gis" ? (
                <GisMap
                  points={filtered}
                  selectedId={selectedPointId}
                  onSelect={setSelectedPointId}
                />
              ) : (
                <Scatter3d
                  points={filtered}
                  selectedId={selectedPointId}
                  onSelect={setSelectedPointId}
                />
              )
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted">
                Loading spatial field…
              </div>
            )}
          </div>
        </Panel>
        <Panel title="Selected cell">
          <PointDetail point={selected} />
        </Panel>
      </div>
      <div className="flex flex-col gap-3">
        <AgencyPanel mode={mode} tick={tick} />
        <CorridorPanel corridors={corridors} />
        <RiverPanel rivers={rivers} />
      </div>
    </div>
  );
}
