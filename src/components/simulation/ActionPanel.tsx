import type { SimulationActionType } from "../../types/simulation";
import "./ActionPanel.css";

interface ActionPanelProps {
  onAction: (action: SimulationActionType) => void;
}

const actionGroups: { title: string; actions: { label: string; action: SimulationActionType }[] }[] = [
  {
    title: "Assessment",
    actions: [
      { label: "Primary Assessment", action: "assessPatient" },
      { label: "Reassess Patient", action: "reassess" },
    ],
  },
  {
    title: "Oxygen / Airway",
    actions: [
      { label: "Nasal Cannula", action: "applyNasalCannula" },
      { label: "Non-Rebreather", action: "applyNonRebreather" },
      { label: "Begin BVM", action: "beginBVM" },
      { label: "Suction Airway", action: "suctionAirway" },
      { label: "Insert OPA", action: "insertOPA" },
    ],
  },
  {
    title: "Medications",
    actions: [
      { label: "Atropine", action: "giveAtropine" },
      { label: "Adenosine", action: "giveAdenosine" },
      { label: "Epinephrine", action: "giveEpinephrine" },
      { label: "Albuterol", action: "giveAlbuterol" },
    ],
  },
  {
    title: "Critical Interventions",
    actions: [
      { label: "Start CPR", action: "startCPR" },
      { label: "Defibrillate", action: "defibrillate" },
      { label: "Synchronized Cardioversion", action: "cardiovert" },
      { label: "Transcutaneous Pacing", action: "pacePatient" },
    ],
  },
];

function ActionPanel({ onAction }: ActionPanelProps) {
  return (
    <aside className="action-panel-sim glass-card">
      <div className="action-panel-head">
        <span>Command Console</span>
        <h2>Interventions</h2>
      </div>

      {actionGroups.map((group) => (
        <div className="action-group" key={group.title}>
          <h3>{group.title}</h3>
          <div className="action-list">
            {group.actions.map((item) => (
              <button key={item.action} type="button" onClick={() => onAction(item.action)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default ActionPanel;
