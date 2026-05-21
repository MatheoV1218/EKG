import type { SimulationActionType, SimulationCaseTemplate, SimulationMistake } from "../../types/simulation";

export function evaluateMistake(
  action: SimulationActionType,
  caseTemplate: SimulationCaseTemplate,
  elapsedSeconds: number
): SimulationMistake | null {
  if (!caseTemplate.harmfulActions.includes(action)) return null;

  return {
    id: crypto.randomUUID(),
    time: elapsedSeconds,
    title: "Unsafe or low-priority action",
    explanation: `The action "${action}" does not match the patient's priority problem in this case and can delay definitive care.`,
  };
}
