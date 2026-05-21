import type { QuizCase } from "../types/quizTypes";
import { oxygenSymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import {
  lowSpo2,
  borderlineSpo2,
  normalSpo2,
  stableBP,
  respiratoryRates,
} from "../pools/vitals";

import {
  buildCase,
  createRoom,
  decideOxygenDevice,
  randomItem,
  randomNumber,
  uniqueItems,
} from "./generatorHelpers";

export function generateOxygenCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 4);

  let symptoms: string[];
  let vitals;
  let category: string;
  let difficulty: "Beginner" | "Intermediate" | "Advanced";

  if (caseType === 0) {
    category = "Mild Hypoxemia";
    difficulty = "Beginner";
    symptoms = uniqueItems(oxygenSymptoms, 2);
    vitals = {
      hr: randomNumber(88, 108),
      spo2: randomItem(borderlineSpo2),
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.elevated),
    };
  } else if (caseType === 1) {
    category = "Severe Hypoxemia";
    difficulty = "Intermediate";
    symptoms = uniqueItems([...oxygenSymptoms, "cyanosis"], 4);
    vitals = {
      hr: randomNumber(115, 138),
      spo2: randomItem(lowSpo2),
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.severe),
    };
  } else if (caseType === 2) {
    category = "Ventilatory Failure";
    difficulty = "Advanced";
    symptoms = ["shallow breathing", "fatigue", "decreased level of consciousness"];
    vitals = {
      hr: randomNumber(48, 72),
      spo2: randomItem(lowSpo2),
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.low),
    };
  } else {
    category = "Normal Oxygenation";
    difficulty = "Beginner";
    symptoms = ["speaking clearly", "no respiratory distress"];
    vitals = {
      hr: randomNumber(70, 96),
      spo2: randomItem(normalSpo2),
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.normal),
    };
  }

  const correctAnswer = decideOxygenDevice(vitals, symptoms);

  return buildCase({
    category,
    difficulty,
    room: createRoom("RESP"),
    rhythm: caseType === 2 ? "Sinus Bradycardia" : "Sinus Rhythm",
    symptoms,
    vitals,
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: [
      "🫁 Nasal Cannula",
      "🫁 Non-Rebreather Mask",
      "🫁 Bag-Valve-Mask Ventilation",
      "👀 Monitor and Reassess",
    ],
    explanation:
      correctAnswer === "🫁 Bag-Valve-Mask Ventilation"
        ? "The low respiratory rate and shallow breathing suggest ventilatory failure. Ventilatory support is needed, not just passive oxygen."
        : correctAnswer === "🫁 Non-Rebreather Mask"
        ? "The patient has severe hypoxemia or cyanosis, so high-concentration oxygen is the best option listed."
        : correctAnswer === "🫁 Nasal Cannula"
        ? "The patient has mild hypoxemia. A nasal cannula is a reasonable first oxygen device with reassessment."
        : "Oxygen saturation and breathing are acceptable, so monitoring and reassessment are appropriate.",
    answerExplanations: {
      "🫁 Nasal Cannula":
        "Best for mild hypoxemia when the patient is breathing adequately.",
      "🫁 Non-Rebreather Mask":
        "Best for severe hypoxemia when the patient is still breathing adequately.",
      "🫁 Bag-Valve-Mask Ventilation":
        "Best when ventilation is inadequate, such as very low respiratory rate, shallow breathing, or decreased consciousness.",
      "👀 Monitor and Reassess":
        "Correct when oxygenation and breathing are stable, but unsafe if SpO₂ is low or ventilation is failing.",
    },
  });
}