export const criticalBP = ["58/34", "62/38", "66/40", "70/42", "74/44"];
export const unstableBP = ["70/40", "76/42", "82/48", "88/50", "90/58"];
export const borderlineBP = ["92/60", "96/62", "98/64", "100/66", "104/68"];
export const stableBP = ["108/70", "112/74", "118/76", "122/78", "126/82", "130/84", "134/86", "138/88"];
export const hypertensiveBP = ["148/90", "156/92", "164/96", "172/100", "180/104", "188/110"];

export const criticalSpo2 = [72, 74, 76, 78, 80, 81];
export const lowSpo2 = [82, 83, 84, 85, 86, 87, 88];
export const borderlineSpo2 = [89, 90, 91, 92, 93, 94];
export const normalSpo2 = [95, 96, 97, 98, 99, 100];

export const respiratoryRates = {
  apneic: [0],
  criticalLow: [4, 5, 6],
  low: [6, 7, 8, 9, 10],
  normal: [12, 14, 16, 18, 20],
  elevated: [22, 24, 26, 28],
  severe: [30, 32, 34, 36, 38, 40],
};

export const heartRates = {
  severeBrady: [24, 28, 32, 36, 38],
  brady: [40, 42, 45, 48, 52, 56],
  normal: [68, 72, 78, 84, 90, 96],
  mildTachy: [104, 110, 118, 124, 132],
  tachy: [150, 162, 174, 186, 198, 210, 224],
};
