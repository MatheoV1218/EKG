export interface ScoreBreakdown {
  score: number;
  grade: "S" | "A" | "B" | "C" | "Needs Review";
  correctActions: number;
  mistakes: number;
  timeBonus: number;
}
