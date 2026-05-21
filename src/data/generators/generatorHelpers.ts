import type { QuizCase, Vitals, Difficulty } from "../types/quizTypes";
import { names } from "../pools/names";

export function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function uniqueItems(array: string[], count: number): string[] {
  return shuffle(array).slice(0, count);
}

export function createRoom(prefix: string): string {
  return `${prefix}-${randomNumber(1, 12)}`;
}

export function createBasePatient() {
  return {
    id: crypto.randomUUID(),
    patientName: randomItem(names),
    age: randomNumber(18, 90),
  };
}

export function getSystolicBP(bp: string): number {
  return Number(bp.split("/")[0]);
}

export function isOlderAdult(age: number): boolean {
  return age >= 65;
}

export function isHypoxic(vitals: Vitals): boolean {
  return vitals.spo2 < 90;
}

export function isSeverelyHypoxic(vitals: Vitals): boolean {
  return vitals.spo2 < 86;
}

export function isTachycardic(vitals: Vitals): boolean {
  return vitals.hr >= 150;
}

export function isBradycardic(vitals: Vitals): boolean {
  return vitals.hr < 50;
}

export function isHypotensive(vitals: Vitals): boolean {
  return getSystolicBP(vitals.bp) < 90;
}

export function hasUnstableSymptoms(symptoms: string[]): boolean {
  const unstableWords = [
    "chest pain",
    "confusion",
    "altered mental status",
    "syncope",
    "near syncope",
    "weak pulses",
    "cool clammy skin",
    "hypotension",
    "severe fatigue",
  ];

  return symptoms.some((symptom) => unstableWords.includes(symptom));
}

export function isUnstable(vitals: Vitals, symptoms: string[]): boolean {
  return isHypotensive(vitals) || hasUnstableSymptoms(symptoms);
}

export function decideTachycardiaTreatment(vitals: Vitals, symptoms: string[]) {
  if (isUnstable(vitals, symptoms)) {
    return "⚡ Synchronized Cardioversion";
  }

  if (isHypoxic(vitals)) {
    return "🫁 Apply Oxygen";
  }

  return "💊 Adenosine";
}

export function decideBradycardiaTreatment(
  vitals: Vitals,
  symptoms: string[],
  age: number
) {
  if (isHypoxic(vitals)) {
    return "🫁 Apply Oxygen";
  }

  if (isBradycardic(vitals) && isUnstable(vitals, symptoms)) {
    if (age >= 75 && getSystolicBP(vitals.bp) < 80) {
      return "⚡ Prepare Transcutaneous Pacing";
    }

    return "💊 Atropine";
  }

  return "👀 Monitor and Reassess";
}

export function decideOxygenDevice(vitals: Vitals, symptoms: string[]) {
  if (vitals.rr <= 8 || symptoms.includes("shallow breathing")) {
    return "🫁 Bag-Valve-Mask Ventilation";
  }

  if (vitals.spo2 < 86 || symptoms.includes("cyanosis")) {
    return "🫁 Non-Rebreather Mask";
  }

  if (vitals.spo2 <= 92) {
    return "🫁 Nasal Cannula";
  }

  return "👀 Monitor and Reassess";
}

export function decideAirwayTreatment(symptoms: string[], vitals: Vitals) {
  if (
    symptoms.includes("gurgling airway sounds") ||
    symptoms.includes("secretions present")
  ) {
    return "🧹 Suction Airway";
  }

  if (
    symptoms.includes("decreased level of consciousness") ||
    symptoms.includes("snoring respirations")
  ) {
    return "🫁 Insert OPA";
  }

  if (vitals.rr <= 8 || vitals.spo2 < 86) {
    return "🫁 Prepare Advanced Airway Support";
  }

  return "👀 Monitor and Reassess";
}

export function decideCardiacArrestTreatment(rhythm: string) {
  if (rhythm === "Ventricular Fibrillation" || rhythm === "Pulseless V Tach") {
    return "⚡ Defibrillation";
  }

  if (rhythm === "Asystole" || rhythm === "PEA") {
    return "💉 Epinephrine + CPR";
  }

  return "🫀 Start High-Quality CPR";
}

export function buildCase(params: {
  category: string;
  difficulty: Difficulty;
  room: string;
  rhythm: string;
  symptoms: string[];
  vitals: Vitals;
  question: string;
  correctAnswer: string;
  answers: string[];
  explanation: string;
  answerExplanations: Record<string, string>;
  age?: number;
}): QuizCase {
  const base = createBasePatient();

  return {
    ...base,
    age: params.age ?? base.age,
    category: params.category,
    difficulty: params.difficulty,
    room: params.room,
    rhythm: params.rhythm,
    symptoms: params.symptoms,
    vitals: params.vitals,
    question: params.question,
    correctAnswer: params.correctAnswer,
    answers: shuffle(params.answers),
    explanation: params.explanation,
    answerExplanations: params.answerExplanations,
  };
}