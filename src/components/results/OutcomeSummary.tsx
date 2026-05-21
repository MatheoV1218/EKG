import "./OutcomeSummary.css";

interface OutcomeSummaryProps {
  outcome: string;
}

function OutcomeSummary({ outcome }: OutcomeSummaryProps) {
  return (
    <section className="outcome-summary">
      <span>Outcome</span>
      <p>{outcome}</p>
    </section>
  );
}

export default OutcomeSummary;
