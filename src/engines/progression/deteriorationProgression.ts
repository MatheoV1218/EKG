export function deteriorationMultiplier(elapsedSeconds: number, harmfulActions: number): number {
  return 1 + elapsedSeconds / 180 + harmfulActions * 0.2;
}
