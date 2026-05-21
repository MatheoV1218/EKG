import { useMemo } from "react";

import { useSimulation } from "../hooks/useSimulation";

import EKGCanvas from "../components/telemetry/EKGCanvas";
import AlarmBanner from "../components/telemetry/AlarmBanner";
import RhythmLabel from "../components/telemetry/RhythmLabel";
import TelemetryGrid from "../components/telemetry/TelemetryGrid";

import SimulationHeader from "../components/simulation/SimulationHeader";
import SimulationFooter from "../components/simulation/SimulationFooter";
import ActionPanel from "../components/simulation/ActionPanel";
import PatientStatusPanel from "../components/simulation/PatientStatusPanel";
import EventFeed from "../components/simulation/EventFeed";

import FinalGrade from "../components/results/FinalGrade";
import PerformanceBreakdown from "../components/results/PerformanceBreakdown";
import MistakesPanel from "../components/results/MistakesPanel";
import TimelineReview from "../components/results/TimelineReview";
import OutcomeSummary from "../components/results/OutcomeSummary";

import PauseOverlay from "../components/overlays/PauseOverlay";
import SuccessOverlay from "../components/overlays/SuccessOverlay";
import DeathOverlay from "../components/overlays/DeathOverlay";

import "./Simulation.css";

function Simulation() {
  const { state, performAction, resetSimulation, togglePause, requiredProgress } = useSimulation();

  const isExpired = state.phase === "expired";
  const isCompleteButNotExpired = state.completed && !isExpired;

  const monitorClass = useMemo(() => {
    if (state.phase === "arrest" || state.phase === "expired") return "critical";
    if (state.phase === "critical") return "warning";
    return "stable";
  }, [state.phase]);

  return (
    <section className={`page simulation-page upgraded-sim ${monitorClass}`}>
      <SimulationHeader
        state={state}
        progress={requiredProgress}
        onPause={togglePause}
        onReset={resetSimulation}
      />

      <div className="sim-command-layout">
        <main className="sim-main-stack">
          <section className="sim-monitor-deck glass-card">
            <div className="sim-monitor-topline">
              <div>
                <span>Central Monitor</span>
                <h2>{state.patient.name}</h2>
              </div>
              <RhythmLabel rhythm={state.rhythm} />
            </div>

            <AlarmBanner alarms={state.activeAlarms} />

            <div className="sim-ekg-frame">
              <EKGCanvas rhythm={state.rhythm} heartRate={state.vitals.heartRate} height={270} />
            </div>

            <TelemetryGrid state={state} />
          </section>

          <div className="sim-lower-grid">
            <PatientStatusPanel state={state} />
            <EventFeed events={state.eventFeed} />
          </div>

          {state.completed && (
            <section className="sim-results-deck glass-card">
              <div className="results-title-row">
                <span className="badge">Debrief</span>
                <h2>Simulation Report</h2>
              </div>

              <div className="results-grid-sim">
                <FinalGrade score={state.score} />
                <OutcomeSummary outcome={state.outcome} />
                <PerformanceBreakdown
                  progress={requiredProgress}
                  mistakes={state.mistakes.length}
                  score={state.score}
                />
              </div>

              <div className="results-review-grid">
                <MistakesPanel mistakes={state.mistakes} />
                <TimelineReview timeline={state.timeline} />
              </div>
            </section>
          )}

          <SimulationFooter outcome={state.outcome} />
        </main>

        <ActionPanel onAction={performAction} />
      </div>

      <PauseOverlay paused={state.paused} onResume={togglePause} />
      <SuccessOverlay show={isCompleteButNotExpired} outcome={state.outcome} onRestart={resetSimulation} />
      <DeathOverlay show={isExpired} onRestart={resetSimulation} />
    </section>
  );
}

export default Simulation;
