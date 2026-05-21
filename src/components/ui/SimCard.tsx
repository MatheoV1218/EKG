import "./SimCard.css";
interface SimCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "blue" | "gold" | "red" | "green" | "cyan";
}
function SimCard({ children, className = "", accent = "blue" }: SimCardProps) {
  return (
    <section className={`sim-card ${accent} ${className}`}>{children}</section>
  );
}
export default SimCard;
