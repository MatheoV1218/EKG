import "./Timer.css";
interface TimerProps {
  seconds: number;
  label?: string;
  urgent?: boolean;
}
function formatTime(totalSeconds: number) {
  const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
  const seconds = Math.max(0, totalSeconds) % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
function Timer({
  seconds,
  label = "Elapsed Time",
  urgent = false,
}: TimerProps) {
  return (
    <div className={`sim-timer ${urgent ? "urgent" : ""}`}>
      <span>{label}</span>
      <strong>{formatTime(seconds)}</strong>
    </div>
  );
}
export default Timer;
