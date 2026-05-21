import { useEffect, useState } from "react";

import "./Quiz.css";

import type { QuizCase } from "../data/types/quizTypes";

import { generateTachycardiaCase } from "../data/generators/tachycardiaGenerator";
import { generateBradycardiaCase } from "../data/generators/bradycardiaGenerator";
import { generateOxygenCase } from "../data/generators/oxygenGenerator";
import { generateAirwayCase } from "../data/generators/airwayGenerator";
import { generateMedicationCase } from "../data/generators/medicationGenerator";
import { generateCardiacArrestCase } from "../data/generators/cardiacArrestGenerator";
import EKGCanvas from "../components/EKGCanvas";

function Quiz() {
  const [caseData, setCaseData] = useState<QuizCase | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  function generateRandomCase() {
    const generators = [
      generateTachycardiaCase,
      generateBradycardiaCase,
      generateOxygenCase,
      generateAirwayCase,
      generateMedicationCase,
      generateCardiacArrestCase,
    ];

    const randomGenerator =
      generators[Math.floor(Math.random() * generators.length)];

    setCaseData(randomGenerator());
    setSelectedAnswer("");
    setShowFeedback(false);
  }

  useEffect(() => {
    generateRandomCase();
  }, []);

  function handleAnswer(answer: string) {
    if (!caseData || showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === caseData.correctAnswer) {
      setScore((prev) => prev + 100);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  }

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
          Every case is generated from controlled medical rules, vitals,
          symptoms, rhythm, age, and patient condition.
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
                key="quiz-monitor"
                rhythm={
                  caseData.rhythm.toLowerCase().includes("tach")
                    ? "sinus-tach"
                    : caseData.rhythm.toLowerCase().includes("brady")
                      ? "brady"
                      : caseData.rhythm.toLowerCase().includes("fibrillation")
                        ? "afib"
                        : caseData.rhythm.toLowerCase().includes("v-tach")
                          ? "vtach"
                          : caseData.rhythm.toLowerCase().includes("asystole")
                            ? "asystole"
                            : "sinus"
                }
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
                    className={`answer-card ${
                      showFeedback && isCorrect ? "correct" : ""
                    } ${
                      showFeedback && isSelected && !isCorrect ? "wrong" : ""
                    }`}
                    onClick={() => handleAnswer(answer)}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className="feedback-box">
                <strong>
                  {selectedAnswer === caseData.correctAnswer
                    ? "Correct:"
                    : "Not quite:"}
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
            <span>Difficulty</span>
            <strong>{caseData.difficulty}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Quiz;
