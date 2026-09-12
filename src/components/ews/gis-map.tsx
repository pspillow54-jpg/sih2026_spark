import { useEffect, useRef, useState } from "react";
import type { HazardPoint, Incident } from "@/lib/ews/types";
import { escapeHtml } from "@/lib/utils";

type Props = {
  points: HazardPoint[];
  incidents?: Incident[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  showIncidents?: boolean;
};

function tipHtml(p: HazardPoint) {
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

export function GisMap({ points, incidents = [], selectedId, onSelect, showIncidents }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const layersRef = useRef<import("leaflet").LayerGroup | null>(null);
  const onSelectRef = useRef(onSelect);
  const [mapReady, setMapReady] = useState(false);
  onSelectRef.current = onSelect;

  useEffect(() => {
    let cancelled = false;
    if (!hostRef.current) return;

    void (async () => {
      const leaflet = await import("leaflet");
      const L = leaflet.default;
      if (cancelled || !hostRef.current) return;

      const map = L.map(hostRef.current, {
        zoomControl: true,
        attributionControl: true,
        minZoom: 5,
        maxZoom: 12,
        maxBounds: [
          [20.5, 86.5],
          [30.8, 98.8],
        ],
      });

      map.fitBounds(
        [
          [22.0, 88.05],
          [29.45, 97.4],
        ],
        { padding: [16, 16], maxZoom: 7 },
      );

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Esri", maxZoom: 16 },
      ).addTo(map);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
        attribution: "Carto",
        pane: "shadowPane",
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

  useEffect(() => {
    const group = layersRef.current;
    if (!mapReady || !group) return;
    void import("leaflet").then((mod) => {
      const L = mod.default;
      if (layersRef.current !== group) return;
      group.clearLayers();

      for (const p of points) {
        const high = p.hazard === 1;
        const color = high ? "#c45c4a" : p.proba > 0.35 ? "#c4a35a" : "#5d8a6a";
        const marker = L.circleMarker([p.lat, p.lng], {
          radius: high ? 8 : 5.5,
          color,
          weight: selectedId === p.id ? 3 : 1.25,
          fillColor: color,
          fillOpacity: high ? 0.85 : 0.55,
          opacity: 0.95,
        });
        marker.bindTooltip(tipHtml(p), {
          className: "hazard-tip",
          sticky: true,
          opacity: 1,
          direction: "top",
        });
        marker.on("click", () => onSelectRef.current(p.id));
        marker.addTo(group);
      }

      if (showIncidents) {
        for (const inc of incidents) {
          if (inc.status === "dismissed") continue;
          const color = inc.severity === "high" ? "#c45c4a" : "#c4a35a";
          const m = L.circleMarker([inc.lat, inc.lng], {
            radius: 6,
            color,
            weight: 2,
            fillColor: color,
            fillOpacity: 0.2,
            dashArray: "3 3",
          });
          m.bindTooltip(
            `<div style="padding:8px 10px;font-size:12px"><strong>${escapeHtml(inc.district)}</strong><br/>${escapeHtml(inc.category)}<br/>${inc.severity.toUpperCase()} · ${inc.status}</div>`,
            { className: "hazard-tip", sticky: true, opacity: 1 },
          );
          m.on("click", () => onSelectRef.current(`inc:${inc.id}`));
          m.addTo(group);
        }
      }
    });
  }, [points, incidents, selectedId, showIncidents, mapReady]);

  return <div ref={hostRef} className="h-full min-h-72 w-full overflow-hidden rounded-md" />;
}
