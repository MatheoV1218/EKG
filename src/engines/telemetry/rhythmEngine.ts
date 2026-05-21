import type { RhythmType } from "../../types/simulation";

export function rhythmLabel(rhythm: RhythmType): string {
  const labels: Record<RhythmType, string> = {
    sinus: "Normal Sinus Rhythm",
    "sinus-tach": "Sinus Tachycardia",
    brady: "Sinus Bradycardia",
    afib: "Atrial Fibrillation",
    vtach: "Ventricular Tachycardia",
    vfib: "Ventricular Fibrillation",
    asystole: "Asystole",
    svt: "SVT",
  };
  return labels[rhythm];
}

export function isShockableRhythm(rhythm: RhythmType): boolean {
  return rhythm === "vfib" || rhythm === "vtach";
}
