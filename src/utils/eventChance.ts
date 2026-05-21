export function eventChance(probabilityPercent: number): boolean {
  return Math.random() * 100 < probabilityPercent;
}
