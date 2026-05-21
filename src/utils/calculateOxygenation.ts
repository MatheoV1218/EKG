import type { OxygenationStatus } from "../types/simulation";

export function calculateOxygenation(spo2: number): OxygenationStatus {
  if (spo2 >= 94) return "Normal";
  if (spo2 >= 90) return "Mild Hypoxia";
  if (spo2 >= 82) return "Moderate Hypoxia";
  return "Severe Hypoxia";
}
