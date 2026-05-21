import type { QuizCase } from "../types/quizTypes";
import { treatmentQuestions } from "../pools/questionPhrases";
import { unstableBP, lowSpo2, respiratoryRates } from "../pools/vitals";

import {
  buildCase,
  createRoom,
  decideCardiacArrestTreatment,
  randomItem,
} from "./generatorHelpers";

export function generateCardiacArrestCase(): QuizCase {
  const rhythms = [
    "Ventricular Fibrillation",
    "Pulseless V Tach",
    "Asystole",
    "PEA",
  ];

  const rhythm = randomItem(rhythms);
  const correctAnswer = decideCardiacArrestTreatment(rhythm);

  return buildCase({
    category: "Cardiac Arrest",
    difficulty: "Advanced",
    room: createRoom("CODE"),
    rhythm,
    symptoms: ["unresponsive", "no palpable pulse", "not breathing normally"],
    vitals: {
      hr: rhythm === "Asystole" ? 0 : rhythm === "PEA" ? 42 : 210,
      spo2: randomItem(lowSpo2),
      bp: rhythm === "PEA" ? randomItem(unstableBP) : "0/0",
      rr: rhythm === "PEA" ? randomItem(respiratoryRates.low) : 0,
    },
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: [
      "⚡ Defibrillation",
      "💉 Epinephrine + CPR",
      "🫀 Start High-Quality CPR",
      "👀 Monitor and Reassess",
    ],
    explanation:
      correctAnswer === "⚡ Defibrillation"
        ? "VF and pulseless VT are shockable cardiac arrest rhythms. Defibrillation with high-quality CPR is the priority."
        : correctAnswer === "💉 Epinephrine + CPR"
        ? "Asystole and PEA are non-shockable rhythms. High-quality CPR and epinephrine are prioritized while searching for reversible causes."
        : "The patient is pulseless and not breathing normally. High-quality CPR must begin immediately.",
    answerExplanations: {
      "⚡ Defibrillation":
        "Correct for shockable cardiac arrest rhythms such as VF and pulseless VT.",
      "💉 Epinephrine + CPR":
        "Correct for non-shockable rhythms such as asystole and PEA, along with high-quality CPR.",
      "🫀 Start High-Quality CPR":
        "Always critical in cardiac arrest, but the best listed action depends on whether the rhythm is shockable or non-shockable.",
      "👀 Monitor and Reassess":
        "Unsafe in cardiac arrest. A pulseless patient needs immediate resuscitation.",
    },
  });
}