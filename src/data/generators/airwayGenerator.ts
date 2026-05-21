import type { QuizCase } from "../types/quizTypes";
import { airwaySymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import { borderlineSpo2, lowSpo2, normalSpo2, stableBP, unstableBP, respiratoryRates } from "../pools/vitals";
import { buildCase, createRoom, decideAirwayTreatment, randomItem, randomNumber, uniqueItems } from "./generatorHelpers";

const answers = ["🧹 Suction Airway", "🫁 Insert OPA", "🫁 Prepare Advanced Airway Support", "🚨 Prepare for Obstruction / Advanced Airway", "👀 Monitor and Reassess"];
const answerExplanations: Record<string, string> = {
  "🧹 Suction Airway": "Correct when gurgling, blood, vomit, or secretions are blocking the airway.",
  "🫁 Insert OPA": "Appropriate for an unconscious patient with tongue obstruction/snoring respirations when no gag reflex is present.",
  "🫁 Prepare Advanced Airway Support": "Best when airway protection or ventilation is failing and the patient may need definitive support.",
  "🚨 Prepare for Obstruction / Advanced Airway": "Best when stridor, drooling, foreign body concern, swelling, or severe upper-airway obstruction is present.",
  "👀 Monitor and Reassess": "Correct only when the patient is protecting their airway and ventilation/oxygenation are stable.",
};

export function generateAirwayCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 7);
  let category = "Stable Airway";
  let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Beginner";
  let symptoms = ["speaking clearly", "strong cough"];
  let vitals = { hr: randomNumber(72, 98), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) };

  if (caseType === 0) {
    category = "Secretions / Airway Clearance";
    symptoms = ["gurgling airway sounds", "secretions present", "weak cough"];
    vitals = { hr: randomNumber(98, 125), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 1) {
    category = "Upper Airway Obstruction";
    difficulty = "Intermediate";
    symptoms = ["snoring respirations", "decreased level of consciousness", "poor airway protection"];
    vitals = { hr: randomNumber(55, 95), spo2: randomItem(lowSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.low) };
  } else if (caseType === 2) {
    category = "Advanced Airway Concern";
    difficulty = "Advanced";
    symptoms = uniqueItems(airwaySymptoms, 5);
    vitals = { hr: randomNumber(115, 145), spo2: randomItem(lowSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.low) };
  } else if (caseType === 3) {
    category = "Foreign Body / Stridor";
    difficulty = "Advanced";
    symptoms = ["stridor", "foreign body concern", "difficulty speaking full sentences", "anxious appearance"];
    vitals = { hr: randomNumber(120, 155), spo2: randomItem(lowSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.severe) };
  } else if (caseType === 4) {
    category = "Contaminated Airway";
    difficulty = "Intermediate";
    symptoms = ["blood in airway", "gurgling airway sounds", "unable to handle secretions", "weak cough"];
    vitals = { hr: randomNumber(104, 138), spo2: randomItem(borderlineSpo2), bp: randomItem(unstableBP), rr: randomItem(respiratoryRates.elevated) };
  } else if (caseType === 5) {
    category = "Possible Airway Burn / Swelling";
    difficulty = "Advanced";
    symptoms = ["burns around mouth", "hoarse voice", "swelling of lips", "stridor"];
    vitals = { hr: randomNumber(108, 140), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) };
  }

  const correctAnswer = decideAirwayTreatment(symptoms, vitals);

  return buildCase({
    category,
    difficulty,
    room: createRoom("AIRWAY"),
    rhythm: "Sinus Rhythm",
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers,
    explanation: `${correctAnswer} is best because the airway decision is based on obstruction, secretion burden, airway protection, RR, and SpO₂. This case includes ${symptoms.slice(0, 3).join(", ")} with SpO₂ ${vitals.spo2}% and RR ${vitals.rr}.`,
    answerExplanations,
  });
}
