import type { RhythmType, VitalsState } from "../../types/simulation";

export function getActiveAlarms(vitals: VitalsState, rhythm: RhythmType, pulsePresent: boolean): string[] {
  const alarms: string[] = [];
  if (!pulsePresent) alarms.push("PULSELESS");
  if (vitals.spo2 < 88) alarms.push("LOW SPO₂");
  if (vitals.systolic > 0 && vitals.systolic < 90) alarms.push("HYPOTENSION");
  if (vitals.heartRate > 150) alarms.push("TACHYCARDIA");
  if (vitals.heartRate > 0 && vitals.heartRate < 50) alarms.push("BRADYCARDIA");
  if (vitals.etco2 < 25) alarms.push("LOW ETCO₂");
  if (vitals.etco2 > 55) alarms.push("HIGH ETCO₂");
  if (["vfib", "asystole", "vtach"].includes(rhythm)) alarms.push("CRITICAL RHYTHM");
  return alarms;
}
