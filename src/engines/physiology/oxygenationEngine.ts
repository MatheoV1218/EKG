import type { VitalsState } from "../../types/simulation";
import { clampVital } from "../../utils/formatVitals";

export function applyOxygenation(vitals: VitalsState, oxygenDevice: string, airwayPatent: boolean): VitalsState {
  let spo2Delta = airwayPatent ? -1 : -3;
  if (oxygenDevice === "Nasal Cannula") spo2Delta += 2;
  if (oxygenDevice === "Non-Rebreather") spo2Delta += 5;
  if (oxygenDevice === "BVM") spo2Delta += 7;

  return {
    ...vitals,
    spo2: clampVital(vitals.spo2 + spo2Delta, 45, 100),
  };
}
