import type { SimulationState } from "../../types/simulation";
import { generateSimulationCase } from "../../data/generators/caseGenerator";
import { generatePatient } from "../../data/generators/patientGenerator";
import { calculateOxygenation } from "../../utils/calculateOxygenation";
import { calculateSeverity, phaseFromSeverity } from "../../utils/calculateSeverity";
import { getPerfusion } from "../physiology/perfusionEngine";
import { getMentalStatus } from "../physiology/neuroEngine";
import { getActiveAlarms } from "../telemetry/alarmEngine";
import { createTimelineEntry } from "../scoring/timelineEngine";

export function createInitialSimulation(): SimulationState {
  const caseTemplate = generateSimulationCase();
  const patient = generatePatient(caseTemplate.chiefComplaint, caseTemplate.symptomPool.slice(0, 4));
  const pulsePresent = caseTemplate.rhythm !== "vfib" && caseTemplate.rhythm !== "asystole";
  const oxygenation = calculateOxygenation(caseTemplate.vitals.spo2);
  const perfusion = getPerfusion(caseTemplate.vitals, pulsePresent);
  const severity = calculateSeverity(caseTemplate.vitals, caseTemplate.rhythm, pulsePresent);

  return {
    patient,
    caseTemplate,
    vitals: caseTemplate.vitals,
    rhythm: caseTemplate.rhythm,
    phase: phaseFromSeverity(severity, pulsePresent),
    mentalStatus: getMentalStatus(perfusion, oxygenation, pulsePresent),
    perfusion,
    oxygenation,
    respiratoryEffort: caseTemplate.vitals.respiratoryRate === 0 ? "Absent" : caseTemplate.vitals.respiratoryRate > 32 ? "Failing" : caseTemplate.vitals.respiratoryRate > 24 ? "Labored" : "Normal",
    airwayPatent: true,
    pulsePresent,
    oxygenDevice: "Room Air",
    activeAlarms: getActiveAlarms(caseTemplate.vitals, caseTemplate.rhythm, pulsePresent),
    eventFeed: [`Case started: ${caseTemplate.title}`],
    timeline: [createTimelineEntry(0, "Simulation started", caseTemplate.chiefComplaint, "event")],
    mistakes: [],
    achievements: [],
    completedActions: [],
    score: 0,
    elapsedSeconds: 0,
    running: true,
    paused: false,
    completed: false,
    outcome: "Simulation in progress.",
  };
}
