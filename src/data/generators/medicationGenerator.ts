import type { QuizCase } from "../types/quizTypes";
import { medicationSymptoms, oxygenSymptoms } from "../pools/symptoms";
import { treatmentQuestions, contraindicationQuestions } from "../pools/questionPhrases";
import {
  stableBP,
  hypertensiveBP,
  borderlineSpo2,
  lowSpo2,
  respiratoryRates,
} from "../pools/vitals";

import {
  buildCase,
  createRoom,
  randomItem,
  randomNumber,
  uniqueItems,
} from "./generatorHelpers";

export function generateMedicationCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 4);

  if (caseType === 0) {
    const correctAnswer = "💨 Albuterol";

    return buildCase({
      category: "Medication Selection",
      difficulty: "Beginner",
      room: createRoom("RESP"),
      rhythm: "Sinus Tachycardia",
      symptoms: ["wheezing", "bronchospasm", "chest tightness"],
      vitals: {
        hr: randomNumber(96, 122),
        spo2: randomItem(borderlineSpo2),
        bp: randomItem(stableBP),
        rr: randomItem(respiratoryRates.elevated),
      },
      question: randomItem(treatmentQuestions),
      correctAnswer,
      answers: [
        "💨 Albuterol",
        "💊 Atropine",
        "⚡ Defibrillation",
        "👀 Monitor and Reassess",
      ],
      explanation:
        "Wheezing and bronchospasm point toward bronchodilator therapy. Albuterol is the best choice from these options.",
      answerExplanations: {
        "💨 Albuterol":
          "Correct for bronchospasm/wheezing when bronchodilator therapy is indicated.",
        "💊 Atropine":
          "Used for symptomatic bradycardia, not bronchospasm.",
        "⚡ Defibrillation":
          "Used for shockable cardiac arrest rhythms, not a wheezing patient with a pulse.",
        "👀 Monitor and Reassess":
          "Reassessment matters, but this patient has active bronchospasm needing treatment.",
      },
    });
  }

  if (caseType === 1) {
    const correctAnswer = "🚫 Avoid Ipratropium";

    return buildCase({
      category: "Contraindications",
      difficulty: "Advanced",
      room: createRoom("RESP"),
      rhythm: "Normal Sinus Rhythm",
      symptoms: ["wheezing", "known medication allergy", "narrow-angle glaucoma history"],
      vitals: {
        hr: randomNumber(82, 104),
        spo2: randomItem(borderlineSpo2),
        bp: randomItem(stableBP),
        rr: randomItem(respiratoryRates.elevated),
      },
      question: randomItem(contraindicationQuestions),
      correctAnswer,
      answers: [
        "🚫 Avoid Ipratropium",
        "💨 Albuterol",
        "🫁 Oxygen Assessment",
        "📈 Monitor Response",
      ],
      explanation:
        "The question asks which option should be avoided. Ipratropium should be questioned with relevant hypersensitivity concerns and used cautiously with glaucoma-related history depending on policy and patient specifics.",
      answerExplanations: {
        "🚫 Avoid Ipratropium":
          "Correct because the case includes allergy/glaucoma-related warning details.",
        "💨 Albuterol":
          "May still be used for bronchospasm if not contraindicated for the patient.",
        "🫁 Oxygen Assessment":
          "Oxygen assessment is appropriate and should not be avoided.",
        "📈 Monitor Response":
          "Monitoring response is appropriate after respiratory medication.",
      },
    });
  }

  if (caseType === 2) {
    const correctAnswer = "🫁 Oxygen First";

    return buildCase({
      category: "Medication Safety",
      difficulty: "Intermediate",
      room: createRoom("ER"),
      rhythm: "Sinus Tachycardia",
      symptoms: uniqueItems(oxygenSymptoms, 3),
      vitals: {
        hr: randomNumber(115, 138),
        spo2: randomItem(lowSpo2),
        bp: randomItem(stableBP),
        rr: randomItem(respiratoryRates.severe),
      },
      question: randomItem(treatmentQuestions),
      correctAnswer,
      answers: [
        "🫁 Oxygen First",
        "💊 Atropine First",
        "⚡ Cardioversion First",
        "👀 Observe Without Oxygen",
      ],
      explanation:
        "The immediate problem is hypoxemia and respiratory distress. Oxygenation should be prioritized before unrelated medication choices.",
      answerExplanations: {
        "🫁 Oxygen First":
          "Correct because SpO₂ is low and respiratory distress is present.",
        "💊 Atropine First":
          "Atropine treats symptomatic bradycardia, not primary hypoxemia.",
        "⚡ Cardioversion First":
          "Cardioversion is for unstable tachyarrhythmia, not the first action for isolated hypoxemia.",
        "👀 Observe Without Oxygen":
          "Unsafe because the patient is hypoxemic.",
      },
    });
  }

  const correctAnswer = "📈 Reassess After Treatment";

  return buildCase({
    category: "Medication Reassessment",
    difficulty: "Beginner",
    room: createRoom("RESP"),
    rhythm: "Sinus Tachycardia",
    symptoms: uniqueItems(medicationSymptoms, 3),
    vitals: {
      hr: randomNumber(115, 136),
      spo2: randomItem(borderlineSpo2),
      bp: randomItem(hypertensiveBP),
      rr: randomItem(respiratoryRates.elevated),
    },
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: [
      "📈 Reassess After Treatment",
      "Ignore Side Effects",
      "Give Repeated Treatments Without Checking",
      "Discharge Immediately",
    ],
    explanation:
      "After medication, reassessment is essential. Heart rate, tremors, oxygen saturation, breath sounds, and overall response should be monitored.",
    answerExplanations: {
      "📈 Reassess After Treatment":
        "Correct because treatment response and side effects must be checked.",
      "Ignore Side Effects":
        "Unsafe because tachycardia and tremors may matter after bronchodilator therapy.",
      "Give Repeated Treatments Without Checking":
        "Unsafe because reassessment should happen before repeating therapy.",
      "Discharge Immediately":
        "Unsafe without reassessing symptoms, vitals, and response.",
    },
  });
}