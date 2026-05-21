import "./VitalCard.css";

interface VitalCardProps {
  label: string;
  value: string | number;
  status?: "normal" | "warning" | "critical";
}

function VitalCard({ label, value, status = "normal" }: VitalCardProps) {
  return (
    <div className={`vital-card-sim ${status}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default VitalCard;
