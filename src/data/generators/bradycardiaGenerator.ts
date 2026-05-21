import type { QuizCase } from "../types/quizTypes";
import { bradySymptoms, stableSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import {
  unstableBP,
  stableBP,
  normalSpo2,
  borderlineSpo2,
  lowSpo2,
  respiratoryRates,
} from "../pools/vitals";

import {
  buildCase,
  createRoom,
  decideBradycardiaTreatment,
  randomItem,
  randomNumber,
  uniqueItems,
} from "./generatorHelpers";

export function generateBradycardiaCase(): QuizCase {
  const symptomatic = Math.random() > 0.25;
  const olderCritical = Math.random() > 0.72;

  const age = olderCritical ? randomNumber(75, 90) : randomNumber(35, 74);

  const symptoms = symptomatic
    ? uniqueItems(bradySymptoms, 3)
    : uniqueItems(stableSymptoms, 2);

  const vitals = symptomatic
    ? {
        hr: olderCritical ? randomNumber(28, 38) : randomNumber(35, 48),
        spo2: olderCritical ? randomItem(lowSpo2) : randomItem(borderlineSpo2),
        bp: olderCritical ? "70/40" : randomItem(unstableBP),
        rr: olderCritical ? randomItem(respiratoryRates.low) : randomItem(respiratoryRates.normal),
      }
    : {
        hr: randomNumber(48, 58),
        spo2: randomItem(normalSpo2),
        bp: randomItem(stableBP),
        rr: randomItem(respiratoryRates.normal),
      };

  const correctAnswer = decideBradycardiaTreatment(vitals, symptoms, age);

  return buildCase({
    category: symptomatic ? "Symptomatic Bradycardia" : "Stable Bradycardia",
    difficulty: correctAnswer === "⚡ Prepare Transcutaneous Pacing" ? "Advanced" : symptomatic ? "Intermediate" : "Beginner",
    age,
    room: createRoom(symptomatic ? "ICU" : "TELE"),
    rhythm: symptomatic ? "Symptomatic Bradycardia" : "Stable Bradycardia",
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: [
      "💊 Atropine",
      "⚡ Prepare Transcutaneous Pacing",
      "🫁 Apply Oxygen",
      "👀 Monitor and Reassess",
    ],
    explanation:
      correctAnswer === "⚡ Prepare Transcutaneous Pacing"
        ? "This older patient has severe symptomatic bradycardia with very poor perfusion. Preparing pacing is the safest escalation while supporting oxygenation and circulation."
        : correctAnswer === "💊 Atropine"
        ? "The patient has symptomatic bradycardia with poor perfusion. Atropine is appropriate as an initial intervention while preparing escalation if needed."
        : correctAnswer === "🫁 Apply Oxygen"
        ? "The patient is bradycardic and hypoxemic. Oxygenation must be corrected while monitoring the rhythm and perfusion."
        : "The heart rate is low, but the patient is stable. Monitoring and reassessment are appropriate.",
    answerExplanations: {
      "💊 Atropine":
        "Appropriate for symptomatic bradycardia with signs of poor perfusion. It may not be enough alone in severe unstable cases.",
      "⚡ Prepare Transcutaneous Pacing":
        "Best when bradycardia is severe, the patient is unstable, or medication response may not be enough.",
      "🫁 Apply Oxygen":
        "Correct when hypoxemia is a major part of the presentation, especially with low SpO₂ or respiratory depression.",
      "👀 Monitor and Reassess":
        "Correct for stable bradycardia, but not enough for symptomatic hypotensive bradycardia.",
    },
  });
}