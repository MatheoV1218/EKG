import "./PerformanceBreakdown.css";

interface PerformanceBreakdownProps {
  progress: number;
  mistakes: number;
  score: number;
}

function PerformanceBreakdown({ progress, mistakes, score }: PerformanceBreakdownProps) {
  return (
    <section className="performance-breakdown">
      <div><span>Required Care</span><strong>{progress}%</strong></div>
      <div><span>Mistakes</span><strong>{mistakes}</strong></div>
      <div><span>Score</span><strong>{score}</strong></div>
    </section>
  );
}

export default PerformanceBreakdown;
