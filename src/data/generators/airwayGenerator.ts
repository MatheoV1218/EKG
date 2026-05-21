import type { QuizCase } from "../types/quizTypes";
import { airwaySymptoms } from "../pools/symptoms";
import { treatmentQuestions } from "../pools/questionPhrases";
import {
  lowSpo2,
  borderlineSpo2,
  unstableBP,
  stableBP,
  respiratoryRates,
} from "../pools/vitals";

import {
  buildCase,
  createRoom,
  decideAirwayTreatment,
  randomItem,
  randomNumber,
  uniqueItems,
} from "./generatorHelpers";

export function generateAirwayCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 4);

  let symptoms: string[];
  let vitals;
  let category: string;
  let difficulty: "Beginner" | "Intermediate" | "Advanced";

  if (caseType === 0) {
    category = "Secretions / Airway Clearance";
    difficulty = "Beginner";
    symptoms = ["gurgling airway sounds", "secretions present", "weak cough"];
    vitals = {
      hr: randomNumber(98, 125),
      spo2: randomItem(borderlineSpo2),
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.elevated),
    };
  } else if (caseType === 1) {
    category = "Upper Airway Obstruction";
    difficulty = "Intermediate";
    symptoms = ["snoring respirations", "decreased level of consciousness", "poor airway protection"];
    vitals = {
      hr: randomNumber(55, 95),
      spo2: randomItem(lowSpo2),
      bp: randomItem(unstableBP),
      rr: randomItem(respiratoryRates.low),
    };
  } else if (caseType === 2) {
    category = "Advanced Airway Concern";
    difficulty = "Advanced";
    symptoms = uniqueItems(airwaySymptoms, 4);
    vitals = {
      hr: randomNumber(115, 145),
      spo2: randomItem(lowSpo2),
      bp: randomItem(unstableBP),
      rr: randomItem(respiratoryRates.low),
    };
  } else {
    category = "Stable Airway";
    difficulty = "Beginner";
    symptoms = ["speaking clearly", "strong cough"];
    vitals = {
      hr: randomNumber(72, 98),
      spo2: 97,
      bp: randomItem(stableBP),
      rr: randomItem(respiratoryRates.normal),
    };
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
    answers: [
      "🧹 Suction Airway",
      "🫁 Insert OPA",
      "🫁 Prepare Advanced Airway Support",
      "👀 Monitor and Reassess",
    ],
    explanation:
      correctAnswer === "🧹 Suction Airway"
        ? "Gurgling sounds and secretions indicate the airway needs clearing."
        : correctAnswer === "🫁 Insert OPA"
        ? "Snoring respirations with decreased consciousness suggest upper airway obstruction. An OPA may help if there is no gag reflex."
        : correctAnswer === "🫁 Prepare Advanced Airway Support"
        ? "The patient has airway compromise with poor ventilation or oxygenation, so advanced airway support should be prepared."
        : "The airway is currently stable, so monitoring and reassessment are appropriate.",
    answerExplanations: {
      "🧹 Suction Airway":
        "Correct when secretions or gurgling sounds are present.",
      "🫁 Insert OPA":
        "Appropriate for an unconscious patient with poor airway protection when no gag reflex is present.",
      "🫁 Prepare Advanced Airway Support":
        "Best when oxygenation or ventilation is failing or airway compromise is severe.",
      "👀 Monitor and Reassess":
        "Appropriate only when the airway is stable and the patient is protecting it.",
    },
  });
}