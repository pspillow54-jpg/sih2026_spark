import { useEffect, useRef } from "react";
import { NER_OUTLINE, STATE_CENTROIDS } from "@/lib/ews/districts";
import type { HazardPoint, NerState } from "@/lib/ews/types";

const LNG_MIN = 87.8;
const LNG_MAX = 97.5;
const LAT_MIN = 21.7;
const LAT_MAX = 29.6;

type Props = {
  points: HazardPoint[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function norm(lng: number, lat: number) {
  return {
    x: (lng - LNG_MIN) / (LNG_MAX - LNG_MIN),
    y: (LAT_MAX - lat) / (LAT_MAX - LAT_MIN),
  };
}

export function Scatter3d({ points, selectedId, onSelect }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const yawRef = useRef(-0.42);
  const hoverRef = useRef<string | null>(null);
  const pointsRef = useRef(points);
  const selectedRef = useRef(selectedId);
  const onSelectRef = useRef(onSelect);
  pointsRef.current = points;
  selectedRef.current = selectedId;
  onSelectRef.current = onSelect;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dragging = false;
    let lastX = 0;
    let running = true;

    const project = (lng: number, lat: number, h: number, w: number, ht: number) => {
      const n = norm(lng, lat);
      const yaw = yawRef.current;
      const cx = n.x - 0.5;
      const cy = n.y - 0.5;
      const rx = cx * Math.cos(yaw) - cy * Math.sin(yaw);
      const ry = cx * Math.sin(yaw) + cy * Math.cos(yaw);
      const scaleX = w * 0.78;
      const scaleY = ht * 0.42;
      const x = w * 0.5 + rx * scaleX;
      const y = ht * 0.58 + ry * scaleY - h;
      return { x, y, depth: ry, rx, ry };
    };

    const hitTest = (mx: number, my: number, w: number, ht: number) => {
      let best: { id: string; d: number } | null = null;
      for (const p of pointsRef.current) {
        const h = 18 + p.proba * 92;
        const pr = project(p.lng, p.lat, h, w, ht);
        const d = (pr.x - mx) ** 2 + (pr.y - my) ** 2;
        if (d < 14 * 14 && (!best || d < best.d)) best = { id: p.id, d };
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
        const y = ht * 0.22 + i * (ht * 0.08);
        ctx.beginPath();
        ctx.moveTo(w * 0.06, y);
        ctx.lineTo(w * 0.94, y);
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
        const da = project(a.lng, a.lat, 0, w, ht).depth;
        const db = project(b.lng, b.lat, 0, w, ht).depth;
        return da - db;
      });

      for (const p of sorted) {
        const h = 16 + p.proba * 96;
        const top = project(p.lng, p.lat, h, w, ht);
        const base = project(p.lng, p.lat, 0, w, ht);
        const high = p.hazard === 1;
        const selected = selectedRef.current === p.id;
        const hover = hoverRef.current === p.id;
        const col = high ? "#c45c4a" : p.proba > 0.35 ? "#c4a35a" : "#5d8a6a";
        const width = selected || hover ? 5.5 : high ? 4.2 : 3.2;

        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,0,0,0.35)";
        ctx.lineWidth = width + 2;
        ctx.moveTo(base.x + 1.5, base.y + 2);
        ctx.lineTo(top.x + 1.5, top.y + 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = col;
        ctx.globalAlpha = high ? 0.95 : 0.7;
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

      for (const [state, c] of Object.entries(STATE_CENTROIDS) as [NerState, { lat: number; lng: number }][]) {
        const pr = project(c.lng, c.lat, 0, w, ht);
        ctx.fillStyle = "rgba(154,175,184,0.55)";
        ctx.font = "10px ui-sans-serif, Segoe UI, sans-serif";
        ctx.fillText(state, pr.x - 18, pr.y + 16);
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      hoverRef.current = hitTest(mx, my, rect.width, rect.height);
      if (dragging) {
        yawRef.current += (e.clientX - lastX) * 0.006;
        lastX = e.clientX;
      }
    };
    const onPointerUp = (e: PointerEvent) => {
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

  return (
    <div ref={wrapRef} className="relative h-full min-h-[280px] w-full overflow-hidden rounded-md bg-bg">
      <canvas ref={canvasRef} className="block h-full w-full touch-none" />
    </div>
  );
}
