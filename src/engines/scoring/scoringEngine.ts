import type { SimulationState } from "../../types/simulation";

export function calculateLiveScore(state: SimulationState): number {
  const requiredCompleted = state.caseTemplate.requiredActions.filter((action) =>
    state.completedActions.includes(action)
  ).length;

  const requiredScore = requiredCompleted * 120;
  const helpfulScore = state.caseTemplate.helpfulActions.filter((action) =>
    state.completedActions.includes(action)
  ).length * 45;
  const mistakePenalty = state.mistakes.length * 85;
  const timePenalty = Math.floor(state.elapsedSeconds / 20) * 5;
  const outcomeBonus = state.phase === "stabilized" ? 250 : 0;

  return Math.max(0, requiredScore + helpfulScore + outcomeBonus - mistakePenalty - timePenalty);
}
