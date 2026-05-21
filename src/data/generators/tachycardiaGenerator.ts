import type { QuizCase } from "../types/quizTypes";
import { stableSymptoms, unstableSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import { borderlineSpo2, normalSpo2, stableBP, unstableBP, hypertensiveBP, respiratoryRates } from "../pools/vitals";
import { buildCase, chance, createRoom, decideTachycardiaTreatment, randomItem, randomNumber, uniqueItems } from "./generatorHelpers";

const answers = [
  "⚡ Synchronized Cardioversion",
  "💊 Adenosine",
  "🫁 Apply Oxygen",
  "👀 Monitor and Reassess",
  "💊 Consider Antiarrhythmic + Expert Help",
  "⚡ Defibrillation",
];

const explanations: Record<string, string> = {
  "⚡ Synchronized Cardioversion": "Best for tachycardia with a pulse plus instability such as hypotension, chest pain, altered mental status, shock, or syncope.",
  "💊 Adenosine": "Appropriate for a stable regular narrow-complex tachycardia pattern after assessment and preparation.",
  "🫁 Apply Oxygen": "Appropriate when hypoxemia is a major part of the presentation, but oxygen alone does not fix an unstable arrhythmia.",
  "👀 Monitor and Reassess": "Only appropriate when the patient is stable. Observation alone is unsafe with shock signs or severe symptoms.",
  "💊 Consider Antiarrhythmic + Expert Help": "More appropriate for stable wide-complex tachycardia where adenosine/cardioversion is not the simple first choice.",
  "⚡ Defibrillation": "Used for pulseless VT/VF or polymorphic unstable arrest-level situations, not routine stable SVT with a pulse.",
};

export function generateTachycardiaCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 6);

  let category = "Stable Narrow-Complex Tachycardia";
  let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Intermediate";
  let rhythm = "SVT / Stable Narrow-Complex Tachycardia";
  let symptoms = uniqueItems(stableSymptoms, 3);
  let vitals = { hr: randomNumber(150, 185), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  let question = randomItem(treatmentQuestions);

  if (caseType === 0) {
    category = "Stable SVT";
    rhythm = "SVT / Stable Narrow-Complex Tachycardia";
  } else if (caseType === 1) {
    category = "Unstable Tachycardia";
    difficulty = "Advanced";
    rhythm = chance(0.5) ? "Unstable Narrow-Complex Tachycardia" : "Unstable Wide-Complex Tachycardia";
    symptoms = uniqueItems(unstableSymptoms, 4);
    vitals = { hr: randomNumber(178, 230), spo2: randomItem(borderlineSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 2) {
    category = "Hypoxic Tachycardia";
    rhythm = "Sinus Tachycardia from Respiratory Distress";
    symptoms = ["shortness of breath", "accessory muscle use", "anxious appearance", "speaking clearly"];
    vitals = { hr: randomNumber(122, 148), spo2: randomItem([86, 87, 88, 89]), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.severe) };
  } else if (caseType === 3) {
    category = "Stable Wide-Complex Tachycardia";
    difficulty = "Advanced";
    rhythm = "Stable Wide-Complex Tachycardia / Monomorphic V Tach";
    symptoms = uniqueItems(["palpitations", "alert and oriented", "mild dizziness", "stable blood pressure", "no chest pain"], 3);
    vitals = { hr: randomNumber(150, 190), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 4) {
    category = "Tachycardia Recognition";
    difficulty = "Beginner";
    rhythm = "Sinus Tachycardia";
    symptoms = uniqueItems(["fever", "anxiety", "pain", "warm skin", "speaking clearly"], 3);
    vitals = { hr: randomNumber(104, 132), spo2: randomItem(normalSpo2), bp: randomItem(hypertensiveBP), rr: randomItem(respiratoryRates.elevated) };

  } else {
    category = "Very Unstable Tachycardia";
    difficulty = "Advanced";
    rhythm = "Unstable Wide-Complex Tachycardia";
    symptoms = ["altered mental status", "weak pulses", "cool clammy skin", "signs of shock"];
    vitals = { hr: randomNumber(190, 240), spo2: randomItem(borderlineSpo2), bp: randomItem(["62/38", "70/42", "76/44"]), rr: randomItem(respiratoryRates.severe) };
  }

  const correctAnswer = decideTachycardiaTreatment(vitals, symptoms, rhythm);

  return buildCase({
    category,
    difficulty,
    room: createRoom(category.includes("Unstable") ? "ER" : "TELE"),
    rhythm,
    symptoms,
    vitals,
    question,
    correctAnswer,
    answers,
    explanation: `${correctAnswer} is the best answer because the decision depends on rhythm type, perfusion, blood pressure, oxygenation, and whether the patient has a pulse. In this case, ${rhythm.toLowerCase()} with HR ${vitals.hr}, BP ${vitals.bp}, SpO₂ ${vitals.spo2}%, and symptoms like ${symptoms.slice(0, 2).join(" and ")} makes this the safest priority.`,
    answerExplanations: explanations,
  });
}
