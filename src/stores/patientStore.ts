import type { SimulationPatient } from "../types/simulation";

export interface PatientStoreState {
  currentPatient: SimulationPatient | null;
}

export const patientStore: PatientStoreState = {
  currentPatient: null,
};
