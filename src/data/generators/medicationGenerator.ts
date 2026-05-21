import type { QuizCase } from "../types/quizTypes";
import { medicationSymptoms, oxygenSymptoms } from "../pools/symptoms";
import { contraindicationQuestions, reassessmentQuestions, treatmentQuestions } from "../pools/questionPhrases";
import { borderlineSpo2, hypertensiveBP, lowSpo2, normalSpo2, stableBP, respiratoryRates } from "../pools/vitals";
import { buildCase, createRoom, randomItem, randomNumber, uniqueItems } from "./generatorHelpers";

const commonAnswers = [
  "💨 Albuterol",
  "🚫 Avoid Ipratropium",
  "🫁 Oxygen First",
  "📈 Reassess After Treatment",
  "💊 Atropine",
  "⚡ Cardioversion First",
  "👀 Monitor and Reassess",
];

const answerExplanations: Record<string, string> = {
  "💨 Albuterol": "Best when the core problem is bronchospasm/wheezing and there is no stronger immediate oxygenation or safety priority.",
  "🚫 Avoid Ipratropium": "Best when the question asks what to avoid and the case includes allergy/glaucoma-type safety warnings.",
  "🫁 Oxygen First": "Best when hypoxemia or respiratory distress is the immediate threat before unrelated medication decisions.",
  "📈 Reassess After Treatment": "Best after a medication was already given; check HR, SpO₂, breath sounds, symptoms, and side effects.",
  "💊 Atropine": "Used for symptomatic bradycardia, not primary bronchospasm or post-nebulizer reassessment.",
  "⚡ Cardioversion First": "Used for unstable tachyarrhythmia. It is not the first answer for routine wheezing with adequate perfusion.",
  "👀 Monitor and Reassess": "Appropriate when symptoms are mild and vitals are stable, but not enough for active bronchospasm or hypoxemia.",
};

export function generateMedicationCase(): QuizCase {
  const caseType = Math.floor(Math.random() * 7);

  if (caseType === 0) {
    const correctAnswer = "💨 Albuterol";
    return buildCase({
      category: "Medication Selection",
      difficulty: "Beginner",
      room: createRoom("RESP"),
      rhythm: "Sinus Tachycardia",
      symptoms: ["wheezing", "bronchospasm", "chest tightness", "prolonged exhalation"],
      vitals: { hr: randomNumber(96, 122), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) },
      question: randomItem(treatmentQuestions),
      correctAnswer,
      answers: commonAnswers,
      explanation: "The main problem is bronchospasm with wheezing and increased work of breathing. Albuterol is the best choice from these options, followed by reassessment.",
      answerExplanations,
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
      vitals: { hr: randomNumber(82, 104), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) },
      question: randomItem(contraindicationQuestions),
      correctAnswer,
      answers: commonAnswers,
      explanation: "This is asking for the unsafe/least appropriate choice. Allergy and glaucoma-related history make ipratropium the medication to question in this scenario.",
      answerExplanations,
    });
  }

  if (caseType === 2) {
    const correctAnswer = "🫁 Oxygen First";
    return buildCase({
      category: "Medication Safety",
      difficulty: "Intermediate",
      room: createRoom("ER"),
      rhythm: "Sinus Tachycardia",
      symptoms: uniqueItems(oxygenSymptoms, 4),
      vitals: { hr: randomNumber(115, 138), spo2: randomItem(lowSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.severe) },
      question: randomItem(treatmentQuestions),
      correctAnswer,
      answers: commonAnswers,
      explanation: "The patient is hypoxemic and working hard to breathe. Oxygenation is the immediate priority before focusing on a medication-only answer.",
      answerExplanations,
    });
  }

  if (caseType === 3) {
    const correctAnswer = "📈 Reassess After Treatment";
    return buildCase({
      category: "Medication Reassessment",
      difficulty: "Beginner",
      room: createRoom("RESP"),
      rhythm: "Sinus Tachycardia",
      symptoms: uniqueItems(["tremors after treatment", "tachycardia", "jitteriness", "wheezing improved", "palpitations after nebulizer"], 3),
      vitals: { hr: randomNumber(118, 145), spo2: randomItem(borderlineSpo2), bp: randomItem(hypertensiveBP), rr: randomItem(respiratoryRates.elevated) },
      question: randomItem(reassessmentQuestions),
      correctAnswer,
      answers: commonAnswers,
      explanation: "After respiratory medication, reassessment is essential. HR, tremors, breath sounds, SpO₂, and the patient’s subjective response all matter.",
      answerExplanations,
    });
  }

  if (caseType === 4) {
    const correctAnswer = "👀 Monitor and Reassess";
    return buildCase({
      category: "Mild Medication Case",
      difficulty: "Beginner",
      room: createRoom("RESP"),
      rhythm: "Sinus Rhythm",
      symptoms: ["mild cough", "speaking clearly", "no wheezing", "stable blood pressure"],
      vitals: { hr: randomNumber(74, 96), spo2: randomItem(normalSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.normal) },
      question: randomItem(treatmentQuestions),
      correctAnswer,
      answers: commonAnswers,
      explanation: "There is no current bronchospasm, hypoxemia, unstable rhythm, or medication emergency. Monitoring and reassessment is safest.",
      answerExplanations,
    });
  }

  const correctAnswer = "💨 Albuterol";
  return buildCase({
    category: "COPD / Asthma Bronchospasm",
    difficulty: "Intermediate",
    room: createRoom("RESP"),
    rhythm: "Sinus Tachycardia",
    symptoms: uniqueItems([...medicationSymptoms, "history of asthma", "history of COPD"], 4),
    vitals: { hr: randomNumber(102, 132), spo2: randomItem(borderlineSpo2), bp: randomItem(stableBP), rr: randomItem(respiratoryRates.elevated) },
    question: randomItem(treatmentQuestions),
    correctAnswer,
    answers: commonAnswers,
    explanation: "The presentation is dominated by bronchospasm. A bronchodilator is the best medication choice, but the patient still needs reassessment after treatment.",
    answerExplanations,
  });
}
