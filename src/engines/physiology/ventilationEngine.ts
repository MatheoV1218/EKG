import type { VitalsState } from "../../types/simulation";
import { clampVital } from "../../utils/formatVitals";

export function applyVentilation(vitals: VitalsState, assistedVentilation: boolean): VitalsState {
  const rr = assistedVentilation ? clampVital(vitals.respiratoryRate + 2, 10, 22) : vitals.respiratoryRate;
  let etco2 = vitals.etco2;
  if (assistedVentilation && etco2 > 45) etco2 -= 3;
  if (!assistedVentilation && vitals.respiratoryRate < 8) etco2 += 4;
  if (!assistedVentilation && vitals.respiratoryRate > 30) etco2 -= 2;
  return { ...vitals, respiratoryRate: rr, etco2: clampVital(etco2, 5, 80) };
}
