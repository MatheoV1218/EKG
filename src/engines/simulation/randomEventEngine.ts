import { randomEvents } from "../../data/events/randomEvents";
import { randomItem } from "../../utils/weightedRandom";

export function getRandomSimulationEvent(caseEvents: string[]): string {
  return randomItem([...caseEvents, ...randomEvents]);
}
