export function shouldTriggerEvent(elapsedSeconds: number, existingEvents: number): boolean {
  if (elapsedSeconds < 12) return false;
  const chance = Math.min(22, 4 + elapsedSeconds * 0.08 - existingEvents * 2);
  return Math.random() * 100 < chance;
}
