import type { QuizCase } from "../types/quizTypes";
import { unstableSymptoms, stableSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import {
  unstableBP,
  stableBP,
  borderlineSpo2,
  normalSpo2,
  respiratoryRates,
} from "../pools/vitals";

import {
  buildCase,
  createRoom,
  decideTachycardiaTreatment,
  randomItem,
  randomNumber,
  uniqueItems,
} from "./generatorHelpers";

export function generateTachycardiaCase(): QuizCase {
  const unstable = Math.random() > 0.35;

  const symptoms = unstable
    ? uniqueItems(unstableSymptoms, 3)
    : uniqueItems(stableSymptoms, 3);

  const vitals = unstable
    ? {
        hr: randomNumber(170, 220),
        spo2: randomItem(borderlineSpo2),
        bp: randomItem(unstableBP),
        rr: randomItem(respiratoryRates.elevated),
      }
    : {
        hr: randomNumber(150, 185),
        spo2: randomItem(normalSpo2),
        bp: randomItem(stableBP),
        rr: randomItem(respiratoryRates.elevated),
      };

  const correctAnswer = decideTachycardiaTreatment(vitals, symptoms);

  return buildCase({
    category: unstable ? "Unstable Tachycardia" : "Stable Narrow-Complex Tachycardia",
    difficulty: unstable ? "Advanced" : "Intermediate",
    room: createRoom(unstable ? "ER" : "TELE"),
    rhythm: unstable ? "Unstable Tachycardia" : "SVT / Stable Narrow-Complex Tachycardia",
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: [
      "⚡ Synchronized Cardioversion",
      "💊 Adenosine",
      "🫁 Apply Oxygen",
      "👀 Monitor and Reassess",
    ],
    explanation:
      correctAnswer === "⚡ Synchronized Cardioversion"
        ? "The patient is tachycardic and unstable. Poor perfusion signs make synchronized cardioversion the priority."
        : correctAnswer === "🫁 Apply Oxygen"
        ? "The patient is hypoxemic, so oxygenation must be addressed while monitoring rhythm and perfusion."
        : "The patient appears stable with a regular narrow-complex tachycardia pattern, so adenosine is the best choice from these options.",
    answerExplanations: {
      "⚡ Synchronized Cardioversion":
        "Correct if tachycardia is causing instability such as hypotension, chest pain, altered mental status, syncope, or poor perfusion.",
      "💊 Adenosine":
        "Appropriate for stable regular narrow-complex tachycardia, but not the priority if the patient is unstable.",
      "🫁 Apply Oxygen":
        "Important when SpO₂ is low, but oxygen alone does not directly correct unstable tachyarrhythmia.",
      "👀 Monitor and Reassess":
        "Appropriate only if the patient is stable. Observation alone is unsafe when unstable signs are present.",
    },
  });
}