export function calculateGrade(score: number): "S" | "A" | "B" | "C" | "Needs Review" {
  if (score >= 900) return "S";
  if (score >= 700) return "A";
  if (score >= 520) return "B";
  if (score >= 360) return "C";
  return "Needs Review";
}
