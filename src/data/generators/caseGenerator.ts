import { mixedCases } from "../cases/mixedCases";
import { randomItem } from "../../utils/weightedRandom";

export function generateSimulationCase() {
  return randomItem(mixedCases);
}
