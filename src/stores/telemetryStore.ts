import type { TelemetryState } from "../types/telemetry";

export const telemetryStore: TelemetryState = {
  heartRate: 80,
  spo2: 98,
  respiratoryRate: 16,
  etco2: 38,
  temperature: 98.6,
  systolic: 118,
  diastolic: 72,
  rhythm: "sinus",
  alarms: [],
};
