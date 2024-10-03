import math from "./math";

interface Item {
  [key: string]: any;
}

function scale<T extends Item | number>(
  array: T[],
  propName?: keyof Item,
  [minRange, maxRange]: [number, number] = [0, 100],
): void {
  let max = -Infinity;

  let min = Infinity;

  for (const item of array) {
    const value = propName ? (item as Item)[propName] : (item as number);
    if (typeof value === "number") {
      if (value > max) max = value;
      if (value < min) min = value;
    }
  }

  const range1 = max - min;

  const range2 = maxRange - minRange;

  if (range1 === 0 || range2 <= 0) return; // Prevent division by zero.

  for (let i = 0; i < array.length; i++) {
    const value = propName
      ? (array[i] as Item)[propName]
      : (array[i] as number);
    const scaledValue = math.num(((value - min) / range1) * range2);
    if (typeof scaledValue !== "number") continue;
    if (propName) {
      (array[i] as Item)[propName] = scaledValue;
    } else {
      array[i] = scaledValue as unknown as T;
    }
  }
}

export default scale;
