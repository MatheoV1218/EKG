import type { PerfusionStatus } from "../types/simulation";
import { calculateMAP } from "./calculateMAP";

export function calculatePerfusion(systolic: number, diastolic: number, pulsePresent = true): PerfusionStatus {
  if (!pulsePresent) return "Absent";
  const map = calculateMAP(systolic, diastolic);
  if (map >= 70 && systolic >= 100) return "Adequate";
  if (map >= 60 && systolic >= 90) return "Borderline";
  return "Poor";
}
