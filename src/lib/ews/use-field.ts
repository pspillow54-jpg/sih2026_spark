import { useMemo } from "react";
import { evaluateField } from "./engine";
import { useEwsStore } from "./store";

export function useHazardField() {
  const mode = useEwsStore((s) => s.mode);
  const rain24 = useEwsStore((s) => s.rain24);
  const rain72 = useEwsStore((s) => s.rain72);
  const soil = useEwsStore((s) => s.soil);
  const cloudbursts = useEwsStore((s) => s.cloudbursts);
  const incidents = useEwsStore((s) => s.incidents);
  const tick = useEwsStore((s) => s.tick);

  return useMemo(
    () =>
      evaluateField({
        mode,
        rain24,
        rain72,
        soil,
        cloudbursts,
        incidents,
        tick,
      }),
    [mode, rain24, rain72, soil, cloudbursts, incidents, tick],
  );
}
