import validate from "./validate";

function simplify(num: number): number | undefined {
  // Readable number.
  if (!validate.isNumber(num)) {
    return undefined;
  } else if (Math.abs(num) < 0.000000001) {
    return 0;
  } else if (Math.abs(num) < 0.000001) {
    return +num.toFixed(8);
  } else if (Math.abs(num) < 0.001) {
    return +num.toFixed(6);
  } else if (Math.abs(num) < 1) {
    return +num.toFixed(4);
  } else if (Math.abs(num) < 1000) {
    return +num.toFixed(2);
  } else {
    return +num.toFixed(0);
  }
}

function changeNum(num1: number, num2: number): number | undefined {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(num2 - num1);
  }
}

function changePercent(num1: number, num2: number): number | undefined {
  if (validate.isNumber(num1) && validate.isNumber(num2) && num1 !== 0) {
    const change = changeNum(num1, num2);
    if (change !== undefined) return simplify(change / num1);
  }
}

function percent(num1: number, num2: number): number | undefined {
  if (validate.isNumber(num1) && validate.isNumber(num2) && num2 !== 0) {
    return simplify((num1 / num2) * 100);
  }
}

function discrepancy(num1: number, num2: number): number | undefined {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(Math.abs(num1 - num2));
  }
}

function sum(arr: number[]): number | undefined {
  if (!validate.isArray(arr)) return;
  let total = 0;
  for (const n of arr) if (validate.isNumber(n)) total += n;
  return simplify(total);
}

function mean(arr: number[]): number | undefined {
  const total = sum(arr);
  if (total !== undefined) return simplify(total / arr.length);
}

function median(arr: number[]): number | undefined {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber).sort((a, b) => a - b);
  if (!numbers.length) return;
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2) return numbers[mid];
  return simplify((numbers[mid - 1] + numbers[mid]) / 2);
}

function mode(arr: number[]): number | undefined {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  if (!numbers.length) return;
  const frequency: { [key: number]: number } = {};
  for (const num of numbers) frequency[num] = (frequency[num] || 0) + 1;
  let res: [string, number] = ["", 0];
  for (const key of Object.keys(frequency)) {
    if (frequency[+key] > res[1]) res = [key, frequency[+key]];
  }
  return simplify(+res[0]);
}

function standarddeviation(arr: number[]): number | undefined {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  if (!numbers.length) return;
  const me = mean(numbers);
  if (me === undefined) return;
  const va = numbers.reduce((r, n) => r + Math.pow(n - me, 2), 0);
  const sq = Math.sqrt(va / numbers.length);
  return simplify(sq);
}

function efficiency(arr: number[]): number | undefined {
  // Journey movement from point A to point B.
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  if (!numbers.length) return;
  const distance = changeNum(numbers[0], numbers[numbers.length - 1]);
  if (distance === undefined) return;
  let i = 0;
  let journey = 0;
  while (i < numbers.length) {
    const movement = changeNum(numbers[i], numbers[i + 1]);
    if (movement !== undefined) journey += Math.abs(movement);
    i++;
  }
  if (journey === 0) return;
  return simplify((Math.abs(distance) / journey) * 100);
}

function rate(
  start: number,
  end: number,
  periods: number = 1,
): number | undefined {
  if (validate.isNumber(start) && validate.isNumber(end)) {
    return simplify((Math.pow(end / start, 1 / periods) - 1) * 100);
  }
}

function normalize(arr: number[] = []): number[] | undefined {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const range = simplify(max - min);
  if (range === undefined || range === 0) return numbers.map(() => 0);
  const numbers2: number[] = [];
  for (const n of numbers) {
    const normalized = simplify((n - min) / range);
    if (normalized !== undefined) numbers2.push(normalized);
  }
  return numbers2;
}

export default {
  num: simplify,
  change: { num: changeNum, percent: changePercent },
  percent,
  discrepancy,
  sum,
  mean,
  median,
  mode,
  standarddeviation,
  efficiency,
  rate,
  normalize,
};
