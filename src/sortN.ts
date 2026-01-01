import validate from "./validate";
import math from "./math";

const RANGE = [0, 1];

interface SortProp<T> {
  name: keyof T;
  weight?: number;
  reverse?: boolean;
}

function sortN<T extends Record<string, unknown>>(
  input: T[],
  ...props: (keyof T | SortProp<T>)[]
): void {
  if (!validate.isArrayNonEmpty(input)) return;

  const normalizedProps: Array<{
    name: keyof T;
    weight: number;
    reverse: boolean;
  }> = [];

  for (const prop of props) {
    if (validate.isString(prop)) {
      normalizedProps.push({
        name: prop as keyof T,
        weight: 1,
        reverse: false,
      });
    } else if (validate.isObject(prop) && validate.isString(prop.name)) {
      normalizedProps.push({
        name: prop.name,
        weight: validate.isNumber(prop.weight) ? prop.weight : 1,
        reverse: prop.reverse === true,
      });
    }
  }

  const stats = new Map<keyof T, { min: number; max: number }>();

  for (const { name } of normalizedProps) {
    let min = Infinity;
    let max = -Infinity;
    for (const item of input) {
      const value = item[name];
      if (!validate.isNumber(value)) continue;
      if (value < min) min = value;
      if (value > max) max = value;
    }
    if (min !== Infinity && max !== -Infinity && max !== min) {
      stats.set(name, { min, max });
    }
  }

  if (!stats.size) return;

  const targetRange = RANGE[1] - RANGE[0];

  for (const item of input) {
    let weightedSum = 0;
    let weightTotal = 0;
    for (const { name, weight, reverse } of normalizedProps) {
      const stat = stats.get(name);
      const raw = item[name];
      if (!stat || !validate.isNumber(raw)) continue;
      let normalized =
        RANGE[0] + ((raw - stat.min) / (stat.max - stat.min)) * targetRange;
      if (reverse) normalized = RANGE[1] - normalized;
      weightedSum += normalized * weight;
      weightTotal += weight;
    }
    const score = weightTotal > 0 ? weightedSum / weightTotal : 0;
    Object.assign(item, { score: math.num(score) });
  }

  input.sort((a, b) => {
    const scoreA = (a as any).score;
    const scoreB = (b as any).score;
    if (validate.isNumber(scoreA) && validate.isNumber(scoreB)) {
      return scoreB - scoreA;
    } else if (validate.isNumber(scoreB)) {
      return 1;
    } else if (validate.isNumber(scoreA)) {
      return -1;
    } else {
      return 0;
    }
  });
}

export default sortN;
