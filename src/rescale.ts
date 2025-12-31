import validate from "./validate";
import math from "./math";

type NumericObject = Record<string, number>;

function rescale<T extends number | NumericObject>(
  input: T[],
  propName?: keyof NumericObject,
  [rangeMin, rangeMax]: [number, number] = [0, 100],
): void {
  if (!validate.isArrayNonEmpty(input)) return;

  let min = Infinity;
  let max = -Infinity;

  for (const item of input) {
    const value = propName
      ? (item as NumericObject)[propName]
      : (item as number);
    if (!validate.isNumber(value)) continue;
    if (value < min) min = value;
    if (value > max) max = value;
  }

  const sourceRange = max - min;
  const targetRange = rangeMax - rangeMin;

  if (sourceRange === 0 || targetRange <= 0) return;

  const scale = targetRange / sourceRange;

  for (let i = 0; i < input.length; i++) {
    const raw = propName
      ? (input[i] as NumericObject)[propName]
      : (input[i] as number);
    if (!validate.isNumber(raw)) continue;
    const scaled = math.num(rangeMin + (raw - min) * scale);
    if (scaled === undefined) continue;
    if (propName) {
      (input[i] as NumericObject)[propName] = scaled;
    } else {
      input[i] = scaled as T;
    }
  }
}

export default rescale;
