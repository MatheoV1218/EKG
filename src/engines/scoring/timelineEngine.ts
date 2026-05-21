import type { TimelineEntry } from "../../types/simulation";

export function createTimelineEntry(
  time: number,
  label: string,
  detail: string,
  kind: TimelineEntry["kind"]
): TimelineEntry {
  return {
    id: crypto.randomUUID(),
    time,
    label,
    detail,
    kind,
  };
}
