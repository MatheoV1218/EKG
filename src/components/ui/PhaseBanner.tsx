import "./PhaseBanner.css";
interface PhaseBannerProps {
  phase: string;
  status?: "stable" | "watch" | "critical" | "arrest";
  detail?: string;
}
function PhaseBanner({ phase, status = "watch", detail }: PhaseBannerProps) {
  return (
    <div className={`phase-banner ${status}`}>
      <div>
        <span>Current Phase</span>
        <strong>{phase}</strong>
      </div>
      {detail && <p>{detail}</p>}
    </div>
  );
}
export default PhaseBanner;
