import type { RhythmType } from "../../types/simulation";

export function waveformIntensity(rhythm: RhythmType): number {
  if (rhythm === "asystole") return 0.1;
  if (rhythm === "vfib") return 0.45;
  if (rhythm === "vtach") return 0.9;
  if (rhythm === "svt") return 0.8;
  return 0.6;
}
