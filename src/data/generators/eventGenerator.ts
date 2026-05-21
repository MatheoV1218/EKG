import { randomEvents } from "../events/randomEvents";

export function generateEvent() {
  return randomEvents[
    Math.floor(Math.random() * randomEvents.length)
  ];
}