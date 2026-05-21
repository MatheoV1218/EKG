import type { SimulationState } from "../../types/simulation";

export function determineOutcome(state: SimulationState): string {
  if (state.phase === "expired") return "Patient expired. Review recognition speed, CPR timing, and harmful actions.";
  if (state.phase === "stabilized" && state.mistakes.length === 0) return "Excellent stabilization with no major safety errors.";
  if (state.phase === "stabilized") return "Patient stabilized, but the debrief found areas to improve.";
  if (state.phase === "arrest") return "Patient remains in arrest. Continue resuscitation priorities.";
  return "Simulation still in progress.";
}

export function shouldStabilize(state: SimulationState): boolean {
  const required = state.caseTemplate.requiredActions;
  return required.every((action) => state.completedActions.includes(action)) && state.mistakes.length <= 2;
}

export function shouldExpire(state: SimulationState): boolean {
  return state.elapsedSeconds > 210 && state.phase === "arrest" && !state.completedActions.includes("startCPR");
}
