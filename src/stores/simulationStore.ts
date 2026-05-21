import type { SimulationState } from "../types/simulation";

export interface SimulationStoreState {
  currentSimulation: SimulationState | null;
}

export const simulationStore: SimulationStoreState = {
  currentSimulation: null,
};
