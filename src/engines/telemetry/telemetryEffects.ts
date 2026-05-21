export function telemetryClass(alarms: string[]): string {
  if (alarms.includes("PULSELESS") || alarms.includes("CRITICAL RHYTHM")) return "telemetry-critical";
  if (alarms.length > 0) return "telemetry-warning";
  return "telemetry-stable";
}
