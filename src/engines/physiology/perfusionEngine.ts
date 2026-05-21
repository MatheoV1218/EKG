import { calculatePerfusion } from "../../utils/calculatePerfusion";
import type { PerfusionStatus, VitalsState } from "../../types/simulation";

export function getPerfusion(vitals: VitalsState, pulsePresent: boolean): PerfusionStatus {
  return calculatePerfusion(vitals.systolic, vitals.diastolic, pulsePresent);
}
