import type { VitalsState } from "../../types/simulation";
import { randomNumber } from "../../utils/weightedRandom";

export function generateVitals(seed: "brady" | "tachy" | "resp" | "arrest" = "resp"): VitalsState {
  if (seed === "brady") {
    return { heartRate: randomNumber(32, 48), spo2: randomNumber(88, 96), systolic: randomNumber(76, 96), diastolic: randomNumber(42, 62), respiratoryRate: randomNumber(8, 16), etco2: randomNumber(34, 48), temperature: 98.6 };
  }
  if (seed === "tachy") {
    return { heartRate: randomNumber(158, 214), spo2: randomNumber(88, 96), systolic: randomNumber(78, 118), diastolic: randomNumber(42, 74), respiratoryRate: randomNumber(22, 34), etco2: randomNumber(28, 42), temperature: 99.1 };
  }
  if (seed === "arrest") {
    return { heartRate: 0, spo2: randomNumber(60, 78), systolic: 0, diastolic: 0, respiratoryRate: 0, etco2: randomNumber(8, 18), temperature: 98.4 };
  }
  return { heartRate: randomNumber(104, 136), spo2: randomNumber(78, 90), systolic: randomNumber(92, 132), diastolic: randomNumber(52, 82), respiratoryRate: randomNumber(26, 38), etco2: randomNumber(48, 62), temperature: 99.4 };
}
