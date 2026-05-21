import type { QuizCase } from "../types/quizTypes";
import { arrestSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import { criticalSpo2, unstableBP, respiratoryRates } from "../pools/vitals";
import { buildCase, createRoom, decideCardiacArrestTreatment, randomItem, uniqueItems } from "./generatorHelpers";

const answers = ["⚡ Defibrillation", "💉 Epinephrine + CPR", "🫀 Start High-Quality CPR", "👀 Monitor and Reassess", "🔎 Search Reversible Causes"];
const answerExplanations: Record<string, string> = {
  "⚡ Defibrillation": "Correct for shockable pulseless rhythms: ventricular fibrillation and pulseless ventricular tachycardia.",
  "💉 Epinephrine + CPR": "Correct for non-shockable rhythms like asystole and PEA while continuing high-quality CPR and looking for reversible causes.",
  "🫀 Start High-Quality CPR": "Always essential in cardiac arrest. If the rhythm-specific answer is available, choose the shock/non-shock pathway.",
  "👀 Monitor and Reassess": "Unsafe in cardiac arrest. A pulseless, apneic/unresponsive patient requires immediate resuscitation.",
  "🔎 Search Reversible Causes": "Important during arrest care, especially PEA/asystole, but it should not replace CPR, epinephrine, or defibrillation when indicated.",
};

export function generateCardiacArrestCase(): QuizCase {
  const rhythms = ["Ventricular Fibrillation", "Pulseless V Tach", "Asystole", "PEA"];
  const rhythm = randomItem(rhythms);
  const correctAnswer = decideCardiacArrestTreatment(rhythm);

  return buildCase({
    category: rhythm === "Ventricular Fibrillation" || rhythm === "Pulseless V Tach" ? "Shockable Cardiac Arrest" : "Non-Shockable Cardiac Arrest",
    difficulty: "Advanced",
    room: createRoom("CODE"),
    rhythm,
    symptoms: uniqueItems(arrestSymptoms, 4),
    vitals: {
      hr: rhythm === "Asystole" ? 0 : rhythm === "PEA" ? randomItem([28, 34, 42, 58]) : randomItem([190, 210, 230, 250]),
      spo2: randomItem(criticalSpo2),
      bp: rhythm === "PEA" ? randomItem(unstableBP) : "0/0",
      rr: rhythm === "PEA" ? randomItem(respiratoryRates.criticalLow) : 0,
    },
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers,
    explanation: `${rhythm} is treated by following the arrest pathway. Shockable rhythms need defibrillation with high-quality CPR. Non-shockable rhythms need CPR, epinephrine, and a search for reversible causes.`,
    answerExplanations,
  });
}
