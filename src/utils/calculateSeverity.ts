import type { SimulationPhase, VitalsState, RhythmType } from "../types/simulation";

export function calculateSeverity(vitals: VitalsState, rhythm: RhythmType, pulsePresent: boolean): number {
  let severity = 0;
  if (!pulsePresent) severity += 60;
  if (vitals.spo2 < 90) severity += 15;
  if (vitals.spo2 < 82) severity += 15;
  if (vitals.systolic < 90) severity += 20;
  if (vitals.systolic < 70) severity += 15;
  if (vitals.respiratoryRate < 8 || vitals.respiratoryRate > 32) severity += 15;
  if (["vfib", "asystole", "vtach"].includes(rhythm)) severity += 20;
  if (vitals.etco2 < 25 || vitals.etco2 > 55) severity += 10;
  return Math.min(100, severity);
}

export function phaseFromSeverity(severity: number, pulsePresent: boolean): SimulationPhase {
  if (!pulsePresent) return "arrest";
  if (severity >= 80) return "critical";
  if (severity >= 45) return "declining";
  return "assessment";
}
