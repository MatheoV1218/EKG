export function monitorStatus(alarms: string[]): "STABLE" | "WATCH" | "CRITICAL" {
  if (alarms.includes("PULSELESS") || alarms.includes("CRITICAL RHYTHM")) return "CRITICAL";
  if (alarms.length > 0) return "WATCH";
  return "STABLE";
}
