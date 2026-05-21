import type { VitalsState } from "../../types/simulation";
import { clampVital } from "../../utils/formatVitals";

export function applyCirculationDrift(vitals: VitalsState, severity: number, pulsePresent: boolean): VitalsState {
  if (!pulsePresent) {
    return { ...vitals, systolic: 0, diastolic: 0, heartRate: 0 };
  }
  const drop = severity >= 70 ? 3 : severity >= 45 ? 2 : 1;
  return {
    ...vitals,
    systolic: clampVital(vitals.systolic - drop, 0, 240),
    diastolic: clampVital(vitals.diastolic - Math.max(1, Math.floor(drop / 2)), 0, 140),
  };
}
