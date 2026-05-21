import { names } from "../pools/names";
import { histories } from "../pools/histories";
import { randomItem, randomNumber, uniqueItems } from "../../utils/weightedRandom";
import type { SimulationPatient } from "../../types/simulation";

export function generatePatient(chiefComplaint: string, symptoms: string[]): SimulationPatient {
  return {
    id: crypto.randomUUID(),
    name: randomItem(names),
    age: randomNumber(22, 88),
    gender: randomItem(["Male", "Female"]),
    chiefComplaint,
    history: uniqueItems(histories, randomNumber(1, 3)),
    symptoms,
    room: `${randomItem(["ER", "ICU", "RESP", "CODE"])}-${randomNumber(1, 12)}`,
  };
}
