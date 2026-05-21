import type { ActionResult, SimulationActionType, SimulationState } from "../../types/simulation";
import { evaluateMistake } from "../scoring/mistakeEngine";
import { createTimelineEntry } from "../scoring/timelineEngine";
import { isShockableRhythm } from "../telemetry/rhythmEngine";
import { clampVital } from "../../utils/formatVitals";

export function processSimulationAction(state: SimulationState, action: SimulationActionType): ActionResult {
  const alreadyDone = state.completedActions.includes(action);
  const mistake = evaluateMistake(action, state.caseTemplate, state.elapsedSeconds);
  let message = "Action completed.";
  let scoreDelta = state.caseTemplate.requiredActions.includes(action) ? 120 : 35;
  let updatedState: Partial<SimulationState> = {};

  if (alreadyDone) {
    return {
      message: "This action was already performed. Repeating it did not add value.",
      scoreDelta: -10,
      updatedState: {},
    };
  }

  if (mistake) {
    scoreDelta = -85;
    message = mistake.explanation;
  }

  switch (action) {
    case "assessPatient":
      message = "Primary assessment completed. Airway, breathing, circulation, and mental status were checked.";
      break;
    case "applyNasalCannula":
      message = "Nasal cannula applied. This helps mild hypoxemia but may be insufficient for severe distress.";
      updatedState = { oxygenDevice: "Nasal Cannula" };
      break;
    case "applyNonRebreather":
      message = "Non-rebreather applied. High-concentration oxygen is now being delivered.";
      updatedState = { oxygenDevice: "Non-Rebreather" };
      break;
    case "beginBVM":
      message = "BVM ventilation started. Ventilation and oxygenation should improve if performed effectively.";
      updatedState = { oxygenDevice: "BVM", airwayPatent: true };
      break;
    case "suctionAirway":
      message = "Airway suctioned. Secretions and obstruction risk reduced.";
      updatedState = { airwayPatent: true };
      break;
    case "insertOPA":
      message = "OPA inserted for poor airway protection. Airway patency improved.";
      updatedState = { airwayPatent: true };
      break;
    case "giveAtropine":
      message = "Atropine given for symptomatic bradycardia. Heart rate and perfusion may improve.";
      updatedState = {
        vitals: {
          ...state.vitals,
          heartRate: clampVital(state.vitals.heartRate + 22, 0, 220),
          systolic: clampVital(state.vitals.systolic + 10, 0, 240),
        },
      };
      break;
    case "giveAdenosine":
      message = "Adenosine given. Appropriate only for stable regular narrow-complex tachycardia.";
      if (state.rhythm === "svt" && state.vitals.systolic >= 90) {
        updatedState = { rhythm: "sinus", vitals: { ...state.vitals, heartRate: 92 } };
      }
      break;
    case "giveEpinephrine":
      message = "Epinephrine administered. Appropriate during cardiac arrest and select shock states.";
      updatedState = { vitals: { ...state.vitals, etco2: clampVital(state.vitals.etco2 + 3, 5, 80) } };
      break;
    case "giveAlbuterol":
      message = "Albuterol given. Bronchospasm may improve, but heart rate can rise.";
      updatedState = { vitals: { ...state.vitals, heartRate: clampVital(state.vitals.heartRate + 8, 0, 240), spo2: clampVital(state.vitals.spo2 + 3, 40, 100) } };
      break;
    case "startCPR":
      message = "High-quality CPR started. Perfusion is being supported during arrest.";
      updatedState = { pulsePresent: false, vitals: { ...state.vitals, etco2: clampVital(state.vitals.etco2 + 8, 5, 80) } };
      break;
    case "defibrillate":
      if (isShockableRhythm(state.rhythm)) {
        message = "Defibrillation delivered for a shockable rhythm. Rhythm conversion is possible.";
        updatedState = { rhythm: "sinus-tach", pulsePresent: true, vitals: { ...state.vitals, heartRate: 118, systolic: 92, diastolic: 58, respiratoryRate: 14, etco2: 32, spo2: clampVital(state.vitals.spo2 + 6, 40, 100) } };
      } else {
        message = "Shock delivered to a non-shockable rhythm. This is unsafe and delays correct care.";
        scoreDelta = -120;
      }
      break;
    case "cardiovert":
      message = "Synchronized cardioversion performed for unstable tachycardia.";
      if (state.rhythm === "svt" || state.rhythm === "vtach") {
        updatedState = { rhythm: "sinus", vitals: { ...state.vitals, heartRate: 94, systolic: clampVital(state.vitals.systolic + 18, 0, 240) } };
      }
      break;
    case "pacePatient":
      message = "Transcutaneous pacing started. Heart rate and blood pressure are improving.";
      updatedState = { rhythm: "sinus", vitals: { ...state.vitals, heartRate: 72, systolic: clampVital(state.vitals.systolic + 22, 0, 240), diastolic: clampVital(state.vitals.diastolic + 10, 0, 140) } };
      break;
    case "reassess":
      message = "Patient reassessed. New vitals and response to interventions documented.";
      break;
  }

  return {
    message,
    scoreDelta,
    mistake: mistake || undefined,
    updatedState,
  };
}

export function actionToTimeline(time: number, action: SimulationActionType, message: string, isMistake: boolean) {
  return createTimelineEntry(time, action, message, isMistake ? "mistake" : "action");
}
