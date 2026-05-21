import TelemetryGrid from "./TelemetryGrid";
import type { RhythmType } from "./EKGCanvas";
interface LiveMonitorProps {
  rhythm?: RhythmType;
  heartRate?: number;
  spo2?: number;
  bloodPressure?: string;
  respiratoryRate?: number;
  etco2?: number;
  status?: "stable" | "watch" | "critical" | "arrest";
  alarms?: string[];
}
function LiveMonitor({
  rhythm = "sinus",
  heartRate = 88,
  spo2 = 96,
  bloodPressure = "122/78",
  respiratoryRate = 16,
  etco2 = 38,
  status = "stable",
  alarms = [],
}: LiveMonitorProps) {
  return (
    <TelemetryGrid
      rhythm={rhythm}
      heartRate={heartRate}
      spo2={spo2}
      bloodPressure={bloodPressure}
      respiratoryRate={respiratoryRate}
      etco2={etco2}
      status={status}
      alarms={alarms}
    />
  );
}
export default LiveMonitor;
