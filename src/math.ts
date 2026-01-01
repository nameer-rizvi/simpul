import validate from "./validate";

function changeNum(input1: unknown, input2: unknown): number | undefined {
  if (validate.isNumberValid(input1) && validate.isNumberValid(input2)) {
    return num(input2 - input1);
  }
}

function changePercent(input1: unknown, input2: unknown): number | undefined {
  if (validate.isNumberValid(input1) && validate.isNumberValid(input2)) {
    if (input1 === 0) return;
    return num(((input2 - input1) / input1) * 100);
  }
}

export type ChangeSymbolType = [
  1 | -1 | 0,
  "up" | "down" | "neutral",
  "+" | "-" | "•",
  "↑" | "↓" | "•",
  "🟢" | "🔴" | "⚪",
];

function changeSymbol(
  input1: unknown,
  input2: unknown,
): ChangeSymbolType | undefined {
  if (validate.isNumberValid(input1) && validate.isNumberValid(input2)) {
    if (input2 > input1) return [1, "up", "+", "↑", "🟢"];
    if (input2 < input1) return [-1, "down", "-", "↓", "🔴"];
    if (input2 === input1) return [0, "neutral", "•", "•", "⚪"];
  }
}

function discrepancy(input1: unknown, input2: unknown): number | undefined {
  if (validate.isNumberValid(input1) && validate.isNumberValid(input2)) {
    return num(Math.abs(input1 - input2));
  }
}

function efficiency(...args: unknown[] | [unknown[]]): number | undefined {
  const numbers = args.flat().filter(validate.isNumberValid);
  if (numbers.length < 2) return 0;
  const distance = Math.abs(numbers[numbers.length - 1] - numbers[0]);
  if (distance === 0) return 0;
  let journey = 0;
  for (let i = 1; i < numbers.length; i++) {
    journey += Math.abs(numbers[i] - numbers[i - 1]);
  }
  if (journey === 0) return 0;
  return num((distance / journey) * 100);
}

function growthRate(
  input1: unknown,
  input2: unknown,
  periods = 1,
): number | undefined {
  if (
    validate.isNumberValid(input1) &&
    validate.isNumberValid(input2) &&
    validate.isNumberValid(periods)
  ) {
    if (input1 === 0 || periods === 0) return;
    return num((Math.pow(input2 / input1, 1 / periods) - 1) * 100);
  }
}

function mean(...args: unknown[] | [unknown[]]): number | undefined {
  let total = 0;
  let count = 0;
  for (const n of args.flat()) {
    if (validate.isNumberValid(n)) {
      total += n;
      count++;
    }
  }
  return count > 0 ? num(total / count) : undefined;
}

function median(...args: unknown[] | [unknown[]]): number | undefined {
  const numbers = args.flat().filter(validate.isNumberValid);
  numbers.sort((a, b) => a - b);
  const length = numbers.length;
  if (length === 0) return;
  const middle = Math.floor(length / 2);
  if (length % 2 === 0) {
    return num((numbers[middle - 1] + numbers[middle]) / 2);
  } else {
    return num(numbers[middle]);
  }
}

function mode(...args: unknown[] | [unknown[]]): number | undefined {
  const freq: Record<number, number> = {};
  for (const n of args.flat()) {
    if (validate.isNumberValid(n)) freq[n] = (freq[n] || 0) + 1;
  }
  return +Object.keys(freq).sort((a, b) => freq[+b] - freq[+a])[0] || undefined;
}

function normalize(...args: unknown[] | [unknown[]]): number[] | undefined {
  const numbers = args.flat().filter(validate.isNumberValid);
  let min = numbers[0];
  let max = numbers[0];
  for (const n of numbers) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  const range = max - min;
  if (!range) return numbers.map(() => 1);
  const normalized: number[] = [];
  for (const n of numbers) normalized.push(num((n - min) / range)!);
  return normalized;
}

function num(input: unknown): number | undefined {
  if (!validate.isNumberValid(input)) return;
  const abs = Math.abs(input);
  if (abs === 0) return 0;
  if (abs >= 1000) return Math.round(input);
  if (abs >= 1) return +input.toFixed(2);
  const decimals = Math.max(3, -Math.floor(Math.log10(abs)) + 2);
  return +input.toFixed(decimals);
}

function percent(input1: unknown, input2: unknown): number | undefined {
  if (validate.isNumberValid(input1) && validate.isNumberValid(input2)) {
    if (input2 === 0) return;
    return num((input1 / input2) * 100);
  }
}

function standardDeviation(
  ...args: unknown[] | [unknown[]]
): number | undefined {
  const varValue = variance(...args);
  if (varValue === undefined) return;
  return num(Math.sqrt(varValue));
}

function sum(...args: unknown[] | [unknown[]]): number | undefined {
  let total = 0;
  for (const n of args.flat()) if (validate.isNumberValid(n)) total += n;
  return num(total);
}

function trendSlope(...args: unknown[] | [unknown[]]): number | undefined {
  const numbers: number[] = [];
  for (const n of args.flat()) if (validate.isNumberValid(n)) numbers.push(n);
  const n = numbers.length;
  if (n < 2) return 0;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;
  for (let i = 0; i < n; i++) {
    const x = i;
    const y = numbers[i];
    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumX2 += x * x;
  }
  const denominator = n * sumX2 - sumX * sumX;
  if (denominator === 0) return 0;
  return num((n * sumXY - sumX * sumY) / denominator);
}

function variance(...args: unknown[] | [unknown[]]): number | undefined {
  let sum = 0;
  let count = 0;
  const numbers: number[] = [];
  for (const n of args.flat()) {
    if (validate.isNumberValid(n)) {
      sum += n;
      count++;
      numbers.push(n);
    }
  }
  if (count < 2) return 0;
  let sqDiffSum = 0;
  for (const n of numbers) sqDiffSum += Math.pow(n - sum / count, 2);
  return num(sqDiffSum / count); // population variance
}

function zscore(
  value: number,
  ...args: unknown[] | [unknown[]]
): number | undefined {
  if (!validate.isNumberValid(value)) return;
  const numbers: number[] = [];
  for (const n of args.flat()) if (validate.isNumberValid(n)) numbers.push(n);
  const meanValue = mean(numbers);
  const stdDev = standardDeviation(numbers);
  if (!stdDev || !meanValue) return 0;
  return num((value - meanValue) / stdDev);
}

export default {
  change: {
    num: changeNum,
    percent: changePercent,
    symbol: changeSymbol,
  },
  discrepancy,
  efficiency,
  growthRate,
  mean,
  median,
  mode,
  normalize,
  num,
  percent,
  standardDeviation,
  sum,
  trendSlope,
  variance,
  zscore,
};
