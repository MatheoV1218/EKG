import type { SimulationState } from "../../types/simulation";
import { applyOxygenation } from "../physiology/oxygenationEngine";
import { applyVentilation } from "../physiology/ventilationEngine";
import { applyCirculationDrift } from "../physiology/circulationEngine";
import { deteriorateVitals } from "../physiology/deteriorationEngine";
import { calculateOxygenation } from "../../utils/calculateOxygenation";
import { calculateSeverity, phaseFromSeverity } from "../../utils/calculateSeverity";
import { getPerfusion } from "../physiology/perfusionEngine";
import { getMentalStatus } from "../physiology/neuroEngine";
import { maybeProgressRhythm } from "../progression/rhythmProgression";
import { shouldTriggerEvent } from "../progression/eventProgression";
import { getActiveAlarms } from "../telemetry/alarmEngine";
import { getRandomSimulationEvent } from "./randomEventEngine";
import { calculateLiveScore } from "../scoring/scoringEngine";
import { createTimelineEntry } from "../scoring/timelineEngine";
import { determineOutcome, shouldExpire, shouldStabilize } from "./outcomeEngine";

export function tickSimulation(state: SimulationState): SimulationState {
  if (!state.running || state.paused || state.completed) return state;

  let next: SimulationState = {
    ...state,
    elapsedSeconds: state.elapsedSeconds + 1,
  };

  const harmfulCount = state.mistakes.length;
  let vitals = deteriorateVitals(next);
  vitals = applyOxygenation(vitals, next.oxygenDevice, next.airwayPatent);
  vitals = applyVentilation(vitals, next.oxygenDevice === "BVM");
  vitals = applyCirculationDrift(vitals, calculateSeverity(vitals, next.rhythm, next.pulsePresent), next.pulsePresent);

  const rhythm = maybeProgressRhythm(next.rhythm, vitals.spo2, vitals.systolic, next.elapsedSeconds + harmfulCount * 10);
  const pulsePresent = rhythm !== "vfib" && rhythm !== "asystole" && !(rhythm === "vtach" && vitals.systolic < 55);
  const oxygenation = calculateOxygenation(vitals.spo2);
  const perfusion = getPerfusion(vitals, pulsePresent);
  const severity = calculateSeverity(vitals, rhythm, pulsePresent);
  let phase = phaseFromSeverity(severity, pulsePresent);
  let completed = next.completed;
  let outcome = next.outcome;

  const eventFeed = [...next.eventFeed];
  const timeline = [...next.timeline];

  if (shouldTriggerEvent(next.elapsedSeconds, eventFeed.length)) {
    const event = getRandomSimulationEvent(next.caseTemplate.possibleEvents);
    eventFeed.unshift(event);
    timeline.push(createTimelineEntry(next.elapsedSeconds, "Random event", event, "event"));
  }

  if (shouldStabilize({ ...next, vitals, rhythm, pulsePresent, phase })) {
    phase = "stabilized";
    completed = true;
  }

  if (shouldExpire({ ...next, vitals, rhythm, pulsePresent, phase })) {
    phase = "expired";
    completed = true;
  }

  const alarms = getActiveAlarms(vitals, rhythm, pulsePresent);
  const score = calculateLiveScore({ ...next, vitals, rhythm, pulsePresent, phase });
  outcome = determineOutcome({ ...next, vitals, rhythm, pulsePresent, phase, completed, score });

  return {
    ...next,
    vitals,
    rhythm,
    pulsePresent,
    phase,
    completed,
    running: !completed,
    oxygenation,
    perfusion,
    mentalStatus: getMentalStatus(perfusion, oxygenation, pulsePresent),
    respiratoryEffort: vitals.respiratoryRate === 0 ? "Absent" : vitals.respiratoryRate > 32 ? "Failing" : vitals.respiratoryRate > 24 ? "Labored" : "Normal",
    activeAlarms: alarms,
    eventFeed: eventFeed.slice(0, 8),
    timeline,
    score,
    outcome,
  };
}
