import { calculateGrade } from "../../engines/scoring/gradingEngine";
import "./FinalGrade.css";

interface FinalGradeProps {
  score: number;
}

function FinalGrade({ score }: FinalGradeProps) {
  const grade = calculateGrade(score);

  return (
    <div className="final-grade-card">
      <span>Final Grade</span>
      <strong>{grade}</strong>
      <p>{score} simulation points</p>
    </div>
  );
}

export default FinalGrade;
