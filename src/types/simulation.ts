export type RhythmType =
  | "sinus"
  | "sinus-tach"
  | "brady"
  | "afib"
  | "vtach"
  | "vfib"
  | "asystole"
  | "svt";

export type SimulationPhase =
  | "assessment"
  | "declining"
  | "critical"
  | "arrest"
  | "stabilized"
  | "expired";

export type MentalStatus =
  | "Alert"
  | "Anxious"
  | "Confused"
  | "Lethargic"
  | "Unresponsive";

export type PerfusionStatus = "Adequate" | "Borderline" | "Poor" | "Absent";
export type OxygenationStatus = "Normal" | "Mild Hypoxia" | "Moderate Hypoxia" | "Severe Hypoxia";
export type RespiratoryEffort = "Normal" | "Increased" | "Labored" | "Failing" | "Absent";

export type SimulationActionType =
  | "assessPatient"
  | "applyNasalCannula"
  | "applyNonRebreather"
  | "beginBVM"
  | "suctionAirway"
  | "insertOPA"
  | "giveAtropine"
  | "giveAdenosine"
  | "giveEpinephrine"
  | "giveAlbuterol"
  | "startCPR"
  | "defibrillate"
  | "cardiovert"
  | "pacePatient"
  | "reassess";

export interface VitalsState {
  heartRate: number;
  spo2: number;
  systolic: number;
  diastolic: number;
  respiratoryRate: number;
  etco2: number;
  temperature: number;
}

export interface SimulationPatient {
  id: string;
  name: string;
  age: number;
  gender: string;
  chiefComplaint: string;
  history: string[];
  symptoms: string[];
  room: string;
}

export interface TimelineEntry {
  id: string;
  time: number;
  label: string;
  detail: string;
  kind: "action" | "event" | "warning" | "success" | "mistake";
}

export interface SimulationMistake {
  id: string;
  time: number;
  title: string;
  explanation: string;
}

export interface SimulationAchievement {
  id: string;
  title: string;
  description: string;
}

export interface SimulationCaseTemplate {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  rhythm: RhythmType;
  vitals: VitalsState;
  chiefComplaint: string;
  requiredActions: SimulationActionType[];
  helpfulActions: SimulationActionType[];
  harmfulActions: SimulationActionType[];
  possibleEvents: string[];
  historyPool: string[];
  symptomPool: string[];
  deteriorationRate: number;
}

export interface SimulationState {
  patient: SimulationPatient;
  caseTemplate: SimulationCaseTemplate;
  vitals: VitalsState;
  rhythm: RhythmType;
  phase: SimulationPhase;
  mentalStatus: MentalStatus;
  perfusion: PerfusionStatus;
  oxygenation: OxygenationStatus;
  respiratoryEffort: RespiratoryEffort;
  airwayPatent: boolean;
  pulsePresent: boolean;
  oxygenDevice: string;
  activeAlarms: string[];
  eventFeed: string[];
  timeline: TimelineEntry[];
  mistakes: SimulationMistake[];
  achievements: SimulationAchievement[];
  completedActions: SimulationActionType[];
  score: number;
  elapsedSeconds: number;
  running: boolean;
  paused: boolean;
  completed: boolean;
  outcome: string;
}

export interface ActionResult {
  message: string;
  scoreDelta: number;
  mistake?: SimulationMistake;
  achievement?: SimulationAchievement;
  updatedState: Partial<SimulationState>;
}
