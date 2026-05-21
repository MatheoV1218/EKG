import type { RhythmType, VitalsState } from "./simulation";

export interface TelemetryState extends VitalsState {
  rhythm: RhythmType;
  alarms: string[];
}
