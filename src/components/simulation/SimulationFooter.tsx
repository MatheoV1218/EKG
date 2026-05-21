import "./SimulationFooter.css";

interface SimulationFooterProps {
  outcome: string;
}

function SimulationFooter({ outcome }: SimulationFooterProps) {
  return (
    <footer className="simulation-footer-sim glass-card">
      <strong>Clinical Guidance</strong>
      <p>{outcome}</p>
    </footer>
  );
}

export default SimulationFooter;
