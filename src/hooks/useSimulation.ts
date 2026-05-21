import { useEffect, useMemo, useState } from "react";
import type { SimulationActionType, SimulationState } from "../types/simulation";
import { createInitialSimulation } from "../engines/simulation/simulationEngine";
import { tickSimulation } from "../engines/simulation/simulationLoop";
import { actionToTimeline, processSimulationAction } from "../engines/simulation/actionEngine";
import { calculateLiveScore } from "../engines/scoring/scoringEngine";
import { determineOutcome } from "../engines/simulation/outcomeEngine";

export function useSimulation() {
  const [state, setState] = useState<SimulationState>(() => createInitialSimulation());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState((current) => tickSimulation(current));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function performAction(action: SimulationActionType) {
    setState((current) => {
      if (current.completed || current.paused) return current;

      const result = processSimulationAction(current, action);
      const nextCompletedActions = [...current.completedActions, action];
      const nextMistakes = result.mistake ? [...current.mistakes, result.mistake] : current.mistakes;
      const nextTimeline = [
        ...current.timeline,
        actionToTimeline(current.elapsedSeconds, action, result.message, Boolean(result.mistake)),
      ];

      const merged: SimulationState = {
        ...current,
        ...result.updatedState,
        vitals: result.updatedState.vitals || current.vitals,
        completedActions: nextCompletedActions,
        mistakes: nextMistakes,
        timeline: nextTimeline,
        eventFeed: [result.message, ...current.eventFeed].slice(0, 8),
      };

      const score = calculateLiveScore(merged) + result.scoreDelta;

      return {
        ...merged,
        score: Math.max(0, score),
        outcome: determineOutcome({ ...merged, score }),
      };
    });
  }

  function resetSimulation() {
    setState(createInitialSimulation());
  }

  function togglePause() {
    setState((current) => ({ ...current, paused: !current.paused }));
  }

  const requiredProgress = useMemo(() => {
    const total = state.caseTemplate.requiredActions.length;
    const done = state.caseTemplate.requiredActions.filter((action) => state.completedActions.includes(action)).length;
    return total === 0 ? 100 : Math.round((done / total) * 100);
  }, [state.caseTemplate.requiredActions, state.completedActions]);

  return {
    state,
    performAction,
    resetSimulation,
    togglePause,
    requiredProgress,
  };
}
