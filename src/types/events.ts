export interface SimulationEvent {
  id: string;
  label: string;
  description: string;
  severity: "low" | "moderate" | "high" | "critical";
  probability: number;
}
