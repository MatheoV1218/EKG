import { Link } from "react-router-dom";

import FloatingParticles from "../components/FloatingParticles";
import LiveMonitor from "../components/LiveMonitor";
import AlertFeed from "../components/AlertFeed";
import TrainingModes from "../components/TrainingModes";
import RhythmCarousel from "../components/RhythmCarousel";
import StatsSection from "../components/StatsSection";
import DailyChallenge from "../components/DailyChallenge";
import HospitalMap from "../components/HospitalMap";
import AchievementPreview from "../components/AchievementPreview";
import HowItWorks from "../components/HowItWorks";

import "./Home.css";

function Home() {
  return (
    <section className="page home-page">
      <FloatingParticles />

      <div className="home-hero upgraded">
        <div className="hero-copy">
          <span className="badge">Royal Blue + Gold Medical Training</span>

          <h1 className="hero-title">
            Train EKGs like a <span className="gold-text">clinical game</span>.
          </h1>

          <p>
            Practice rhythm recognition, airway management, oxygen therapy,
            medication safety, and emergency response through randomized patient
            cases that feel alive.
          </p>

          <div className="hero-actions">
            <Link to="/quiz" className="primary-btn">
              Start Quiz
            </Link>

            <Link to="/simulation" className="secondary-btn">
              View Simulator
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>∞</strong>
              <span>Random Cases</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Modes</span>
            </div>

            <div>
              <strong>LIVE</strong>
              <span>Vitals</span>
            </div>
          </div>
        </div>

        <LiveMonitor />
      </div>

      <StatsSection />

      <div className="home-dual-section">
        <AlertFeed />
        <DailyChallenge />
      </div>

      <TrainingModes />

      <RhythmCarousel />

      <HospitalMap />

      <AchievementPreview />

      <HowItWorks />
      <section className="medical-disclaimer glass-card">
        <span className="badge">Educational Disclaimer</span>

        <p>
          RhythmLab is a learning simulator designed for educational and
          entertainment purposes only. This website does not provide medical
          advice, diagnosis, or treatment recommendations. Do not use this
          platform for real patient care or clinical decision-making. Always
          follow licensed medical professionals, official protocols, and
          accredited training programs.
        </p>
      </section>
    </section>
  );
}

export default Home;
