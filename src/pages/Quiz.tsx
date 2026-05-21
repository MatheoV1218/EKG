import { useEffect, useMemo, useState } from "react";

import "./Quiz.css";

import type { QuizCase } from "../data/types/quizTypes";

import { generateTachycardiaCase } from "../data/generators/tachycardiaGenerator";
import { generateBradycardiaCase } from "../data/generators/bradycardiaGenerator";
import { generateOxygenCase } from "../data/generators/oxygenGenerator";
import { generateAirwayCase } from "../data/generators/airwayGenerator";
import { generateMedicationCase } from "../data/generators/medicationGenerator";
import { generateCardiacArrestCase } from "../data/generators/cardiacArrestGenerator";
import EKGCanvas from "../components/EKGCanvas";

type CaseGenerator = () => QuizCase;

const generators: CaseGenerator[] = [
  generateTachycardiaCase,
  generateBradycardiaCase,
  generateOxygenCase,
  generateAirwayCase,
  generateMedicationCase,
  generateCardiacArrestCase,
];

function getCanvasRhythm(rhythm: string) {
  const normalized = rhythm.toLowerCase();

  if (normalized.includes("fibrillation") && !normalized.includes("ventricular")) return "afib";
  if (normalized.includes("vfib") || normalized.includes("ventricular fibrillation")) return "vfib";
  if (normalized.includes("v tach") || normalized.includes("wide-complex")) return "vtach";
  if (normalized.includes("asystole")) return "asystole";
  if (normalized.includes("svt") || normalized.includes("narrow-complex")) return "svt";
  if (normalized.includes("tach")) return "sinus-tach";
  if (normalized.includes("brady")) return "brady";

  return "sinus";
}

function createCaseSignature(caseData: QuizCase) {
  return `${caseData.category}-${caseData.rhythm}-${caseData.correctAnswer}`;
}

function Quiz() {
  const [caseData, setCaseData] = useState<QuizCase | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [casesCompleted, setCasesCompleted] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [recentCases, setRecentCases] = useState<string[]>([]);

  function generateRandomCase() {
    let nextCase = generators[Math.floor(Math.random() * generators.length)]();
    let attempts = 0;

    while (recentCases.includes(createCaseSignature(nextCase)) && attempts < 12) {
      nextCase = generators[Math.floor(Math.random() * generators.length)]();
      attempts += 1;
    }

    setRecentCases((prev) => [createCaseSignature(nextCase), ...prev].slice(0, 10));
    setCaseData(nextCase);
    setSelectedAnswer("");
    setShowFeedback(false);
  }

  useEffect(() => {
    generateRandomCase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAnswer(answer: string) {
    if (!caseData || showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);
    setCasesCompleted((prev) => prev + 1);

    if (answer === caseData.correctAnswer) {
      setScore((prev) => prev + 100 + streak * 15);
      setStreak((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  }

  const accuracy = useMemo(() => {
    if (casesCompleted === 0) return 0;
    return Math.round((correctCount / casesCompleted) * 100);
  }, [casesCompleted, correctCount]);

  if (!caseData) return null;

  const selectedExplanation = selectedAnswer
    ? caseData.answerExplanations[selectedAnswer]
    : "";

  return (
    <section className="page quiz-page">
      <div className="quiz-header">
        <span className="badge">{caseData.category}</span>

        <h1 className="section-title">Diagnose and stabilize the patient.</h1>

        <p className="section-subtitle">
          Every case is generated from controlled rules using rhythm, age,
          symptoms, oxygenation, ventilation, perfusion, and contraindication
          logic so repeated categories still feel different.
        </p>
      </div>

      <div className="quiz-layout">
        <div className="quiz-main glass-card">
          <div className="quiz-monitor">
            <div className="monitor-top">
              <span>
                {caseData.patientName} • Age {caseData.age} • {caseData.room}
              </span>

              <span className="live">LIVE</span>
            </div>

            <div className="monitor-ekg">
              <EKGCanvas
                key={caseData.id}
                rhythm={getCanvasRhythm(caseData.rhythm)}
                heartRate={caseData.vitals.hr}
                height={220}
              />
            </div>

            <div className="quiz-vitals">
              <div>
                <span>HR</span>
                <strong>{caseData.vitals.hr}</strong>
              </div>

              <div>
                <span>SpO₂</span>
                <strong>{caseData.vitals.spo2}%</strong>
              </div>

              <div>
                <span>BP</span>
                <strong>{caseData.vitals.bp}</strong>
              </div>

              <div>
                <span>RR</span>
                <strong>{caseData.vitals.rr}</strong>
              </div>
            </div>
          </div>

          <div className="symptoms">
            <span className="rhythm-chip">{caseData.rhythm}</span>

            {caseData.symptoms.map((symptom) => (
              <span key={symptom}>{symptom}</span>
            ))}
          </div>

          <div className="question-section">
            <span className="question-label">Clinical Decision Question</span>

            <h2>{caseData.question}</h2>

            <div className="answer-grid">
              {caseData.answers.map((answer) => {
                const isCorrect = answer === caseData.correctAnswer;
                const isSelected = answer === selectedAnswer;

                return (
                  <button
                    key={answer}
                    className={`answer-card ${showFeedback && isCorrect ? "correct" : ""} ${showFeedback && isSelected && !isCorrect ? "wrong" : ""}`}
                    onClick={() => handleAnswer(answer)}
                    disabled={showFeedback}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className="feedback-box">
                <strong>
                  {selectedAnswer === caseData.correctAnswer ? "Correct:" : "Not quite:"}
                </strong>{" "}
                {selectedAnswer}

                {selectedExplanation && <p>{selectedExplanation}</p>}

                <div className="correct-answer-line">
                  <strong>Best Answer:</strong> {caseData.correctAnswer}
                </div>

                <p>{caseData.explanation}</p>

                <button className="next-btn" onClick={generateRandomCase}>
                  Next Case
                </button>
              </div>
            )}
          </div>
        </div>

        <aside className="quiz-sidebar glass-card">
          <div className="quiz-stat">
            <span>Score</span>
            <strong>{score}</strong>
          </div>

          <div className="quiz-stat">
            <span>Streak</span>
            <strong>{streak}</strong>
          </div>

          <div className="quiz-stat">
            <span>Accuracy</span>
            <strong>{accuracy}%</strong>
          </div>

          <div className="quiz-stat">
            <span>Cases</span>
            <strong>{casesCompleted}</strong>
          </div>

          <div className="quiz-stat wide-stat">
            <span>Difficulty</span>
            <strong>{caseData.difficulty}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Quiz;
