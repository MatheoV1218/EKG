import type { QuizCase } from "../types/quizTypes";
import { oxygenSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import { borderlineSpo2, criticalSpo2, lowSpo2, normalSpo2, stableBP, unstableBP, respiratoryRates } from "../pools/vitals";
import { buildCase, createRoom, decideOxygenDevice, randomItem, randomNumber, uniqueItems } from "./generatorHelpers";

const answers = ["🫁 Nasal Cannula", "🫁 Non-Rebreather Mask", "🫁 Bag-Valve-Mask Ventilation", "👀 Monitor and Reassess"];
const answerExplanations: Record<string, string> = {
  "🫁 Nasal Cannula": "Best for mild hypoxemia or increased work of breathing when the patient is still ventilating adequately.",
  "🫁 Non-Rebreather Mask": "Best for severe hypoxemia/cyanosis when the patient can still breathe adequately on their own.",
  "🫁 Bag-Valve-Mask Ventilation": "Best when ventilation is failing: apnea, very low RR, shallow breathing, or decreased consciousness.",
  "👀 Monitor and Reassess": "Correct only when oxygenation and ventilation are stable. Unsafe when SpO₂ is low or ventilation is poor.",
};

export function generateOxygenCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 7);
  let category = "Normal Oxygenation";
  let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Beginner";
  let rhythm = "Sinus Rhythm";
  let symptoms = ["speaking clearly", "no respiratory distress"];
  let vitals = { hr: randomNumber(70, 96), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };

  if (caseType === 0) {
    category = "Mild Hypoxemia";
    symptoms = uniqueItems(oxygenSymptoms, 3);
    vitals = { hr: randomNumber(88, 112), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 1) {
    category = "Severe Hypoxemia";
    difficulty = "Intermediate";
    symptoms = uniqueItems([...oxygenSymptoms, "cyanosis", "dusky lips"], 4);
    vitals = { hr: randomNumber(115, 142), spo2: randomItem(lowSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.severe) };
  } else if (caseType === 2) {
    category = "Ventilatory Failure";
    difficulty = "Advanced";
    symptoms = ["shallow breathing", "fatigue", "decreased level of consciousness", "rapid shallow breathing"];
    vitals = { hr: randomNumber(48, 78), spo2: randomItem(lowSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.low) };
  } else if (caseType === 3) {
    category = "Apneic Patient";
    difficulty = "Advanced";
    symptoms = ["unresponsive", "apneic", "cyanotic appearance", "no normal breathing"];
    vitals = { hr: randomNumber(34, 70), spo2: randomItem(criticalSpo2), bp: randomItem(unstableBP), rr: 0 };
  } else if (caseType === 4) {
    category = "COPD-Style Moderate Distress";
    difficulty = "Intermediate";
    symptoms = ["pursed-lip breathing", "accessory muscle use", "difficulty speaking full sentences"];
    vitals = { hr: randomNumber(96, 122), spo2: randomItem([88, 89, 90, 91]), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 5) {
    category = "Rapidly Worsening Oxygenation";
    difficulty = "Advanced";
    symptoms = ["cyanosis", "restlessness", "tripod positioning", "accessory muscle use"];
    vitals = { hr: randomNumber(125, 155), spo2: randomItem(criticalSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.severe) };
  }

  const correctAnswer = decideOxygenDevice(vitals, symptoms);

  return buildCase({
    category,
    difficulty,
    room: createRoom("RESP"),
    rhythm,
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers,
    explanation: `${correctAnswer} is best because oxygen therapy depends on both oxygenation and ventilation. SpO₂ ${vitals.spo2}% with RR ${vitals.rr} and symptoms like ${symptoms.slice(0, 2).join(" and ")} points to this level of support.`,
    answerExplanations,
  });
}
