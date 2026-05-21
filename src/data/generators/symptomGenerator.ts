import {
  unstableSymptoms,
  stableSymptoms,
  bradySymptoms,
  tachySymptoms,
} from "../symptoms/cardiacSymptoms";

import {
  oxygenSymptoms,
  airwaySymptoms,
} from "../symptoms/respiratorySymptoms";

function randomItem<T>(
  items: T[]
): T {
  return items[
    Math.floor(Math.random() * items.length)
  ];
}

export function generateSymptoms(
  type: string
) {
  switch (type) {
    case "bradycardia":
      return [
        randomItem(bradySymptoms),
        randomItem(unstableSymptoms),
      ];

    case "tachycardia":
      return [
        randomItem(tachySymptoms),
        randomItem(unstableSymptoms),
      ];

    case "respiratory":
      return [
        randomItem(oxygenSymptoms),
        randomItem(airwaySymptoms),
      ];

    default:
      return [
        randomItem(stableSymptoms),
      ];
  }
}