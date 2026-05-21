import type { QuizCase } from "../types/quizTypes";
import { bradySymptoms, stableSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import { borderlineSpo2, lowSpo2, normalSpo2, stableBP, unstableBP, criticalBP, respiratoryRates } from "../pools/vitals";
import { buildCase, chance, createRoom, decideBradycardiaTreatment, randomItem, randomNumber, uniqueItems } from "./generatorHelpers";

const answers = ["💊 Atropine", "⚡ Prepare Transcutaneous Pacing", "🫁 Apply Oxygen", "👀 Monitor and Reassess"];

const answerExplanations: Record<string, string> = {
  "💊 Atropine": "Appropriate for symptomatic bradycardia with poor perfusion when the patient is not already in an immediately pacing-level presentation.",
  "⚡ Prepare Transcutaneous Pacing": "Best for severe unstable bradycardia, especially very low heart rate, older age, severe hypotension, or poor response concern.",
  "🫁 Apply Oxygen": "Best when hypoxemia is a major immediate threat or respiratory depression is contributing to the bradycardia.",
  "👀 Monitor and Reassess": "Correct for stable bradycardia, such as an alert patient with good BP and no poor perfusion signs.",
};

export function generateBradycardiaCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 6);
  const age = caseType === 1 || caseType === 3 ? randomNumber(70, 92) : randomNumber(18, 70);

  let category = "Stable Bradycardia";
  let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Beginner";
  let rhythm = "Stable Bradycardia";
  let symptoms = uniqueItems(stableSymptoms, 3);
  let vitals = { hr: randomNumber(44, 58), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };

  if (caseType === 0) {
    category = "Athletic / Stable Bradycardia";
    symptoms = ["alert and oriented", "speaking clearly", "stable blood pressure", "no chest pain"];
    vitals = { hr: randomNumber(42, 52), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };
  } else if (caseType === 1) {
    category = "Severe Symptomatic Bradycardia";
    difficulty = "Advanced";
    rhythm = "Symptomatic Bradycardia";
    symptoms = ["altered mental status", "weak pulses", "cool extremities", "poor perfusion"];
    vitals = { hr: randomNumber(24, 36), spo2: randomItem(borderlineSpo2), bp: randomItem(criticalBP), rr: randomItem(respiratoryRates.low) };
  } else if (caseType === 2) {
    category = "Symptomatic Bradycardia";
    difficulty = "Intermediate";
    rhythm = "Symptomatic Bradycardia";
    symptoms = uniqueItems(bradySymptoms, 4);
    vitals = { hr: randomNumber(36, 48), spo2: randomItem(borderlineSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.normal) };
  } else if (caseType === 3) {
    category = "Hypoxic Bradycardia";
    difficulty = "Advanced";
    rhythm = "Sinus Bradycardia with Hypoxemia";
    symptoms = ["shortness of breath", "decreased level of consciousness", "shallow breathing", "cyanosis"];
    vitals = { hr: randomNumber(34, 52), spo2: randomItem(lowSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.low) };
  } else if (caseType === 4) {
    category = "Medication-Associated Bradycardia";
    difficulty = "Intermediate";
    rhythm = "Symptomatic Bradycardia";
    symptoms = uniqueItems(["dizziness", "fatigue", "weakness", "recent beta blocker dose", "stable blood pressure"], 3);
    vitals = { hr: randomNumber(38, 48), spo2: randomItem(normalSpo2), bp: chance(0.45) ? randomItem(unstableBP) : randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };
  } else {
    category = "Borderline Bradycardia";
    symptoms = uniqueItems(["mild dizziness", "fatigue", "alert and oriented", "strong radial pulse", "no chest pain"], 3);
    vitals = { hr: randomNumber(50, 58), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };
  }

  const correctAnswer = decideBradycardiaTreatment(vitals, symptoms, age);

  return buildCase({
    category,
    difficulty,
    age,
    room: createRoom(category.includes("Severe") ? "ICU" : "TELE"),
    rhythm,
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers,
    explanation: `${correctAnswer} is the safest choice because bradycardia treatment depends on symptoms and perfusion, not heart rate alone. This patient is ${age} years old with HR ${vitals.hr}, BP ${vitals.bp}, SpO₂ ${vitals.spo2}%, and symptoms including ${symptoms.slice(0, 2).join(" and ")}.`,
    answerExplanations,
  });
}
