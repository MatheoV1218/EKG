export function formatBloodPressure(systolic: number, diastolic: number): string {
  return `${Math.round(systolic)}/${Math.round(diastolic)}`;
}

export function clampVital(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}
