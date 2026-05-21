import type { SimulationState, VitalsState } from "../../types/simulation";
import { clampVital } from "../../utils/formatVitals";

export function deteriorateVitals(state: SimulationState): VitalsState {
  const rate = state.caseTemplate.deteriorationRate;
  if (state.phase === "stabilized" || state.completed) return state.vitals;
  if (state.phase === "arrest") {
    return {
      ...state.vitals,
      heartRate: 0,
      systolic: 0,
      diastolic: 0,
      respiratoryRate: 0,
      spo2: clampVital(state.vitals.spo2 - 2, 40, 100),
      etco2: clampVital(state.vitals.etco2 - 1, 5, 80),
    };
  }
  return {
    ...state.vitals,
    spo2: clampVital(state.vitals.spo2 - rate, 40, 100),
    systolic: clampVital(state.vitals.systolic - rate, 0, 240),
    diastolic: clampVital(state.vitals.diastolic - rate / 2, 0, 140),
    respiratoryRate: clampVital(state.vitals.respiratoryRate + (rate > 1.5 ? 1 : 0), 0, 50),
  };
}
