export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Vitals {
  hr: number;
  spo2: number;
  bp: string;
  rr: number;
}

export interface AnswerExplanation {
  answer: string;
  explanation: string;
}

export interface QuizCase {
  id: string;
  category: string;
  difficulty: Difficulty;
  patientName: string;
  age: number;
  room: string;
  rhythm: string;
  symptoms: string[];
  vitals: Vitals;
  question: string;
  answers: string[];
  correctAnswer: string;
  explanation: string;
  answerExplanations: Record<string, string>;
}