import type { RhythmType } from "../../types/simulation";

export function maybeProgressRhythm(rhythm: RhythmType, spo2: number, systolic: number, elapsedSeconds: number): RhythmType {
  if (rhythm === "vfib" && elapsedSeconds > 90) return "asystole";
  if (rhythm === "vtach" && systolic < 70) return "vfib";
  if (rhythm === "brady" && spo2 < 78 && systolic < 70) return "asystole";
  if (rhythm === "svt" && systolic < 70) return "vtach";
  if (rhythm === "sinus-tach" && spo2 < 75) return "vtach";
  return rhythm;
}
