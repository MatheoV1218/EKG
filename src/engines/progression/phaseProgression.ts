import type { SimulationPhase, VitalsState, RhythmType } from "../../types/simulation";
import { calculateSeverity, phaseFromSeverity } from "../../utils/calculateSeverity";

export function getNextPhase(vitals: VitalsState, rhythm: RhythmType, pulsePresent: boolean): SimulationPhase {
  const severity = calculateSeverity(vitals, rhythm, pulsePresent);
  return phaseFromSeverity(severity, pulsePresent);
}
