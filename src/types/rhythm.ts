export type RhythmName = "sinus" | "sinus-tach" | "brady" | "afib" | "vtach" | "vfib" | "asystole" | "svt";

export interface RhythmDefinition {
  id: RhythmName;
  label: string;
  shockable: boolean;
  dangerous: boolean;
}
