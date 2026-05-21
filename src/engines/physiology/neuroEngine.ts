import type { MentalStatus, PerfusionStatus, OxygenationStatus } from "../../types/simulation";

export function getMentalStatus(perfusion: PerfusionStatus, oxygenation: OxygenationStatus, pulsePresent: boolean): MentalStatus {
  if (!pulsePresent) return "Unresponsive";
  if (perfusion === "Poor" || oxygenation === "Severe Hypoxia") return "Lethargic";
  if (perfusion === "Borderline" || oxygenation === "Moderate Hypoxia") return "Confused";
  if (oxygenation === "Mild Hypoxia") return "Anxious";
  return "Alert";
}
