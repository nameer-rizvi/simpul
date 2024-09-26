const validate = require("./validate");

function simplify(num) {
  // Readable number.
  if (!validate.isNumber(num)) {
    return undefined;
  } else if (Math.abs(num) < 0.001) {
    return +num.toFixed(6);
  } else if (Math.abs(num) < 1) {
    return +num.toFixed(4);
  } else if (Math.abs(num) < 1000) {
    return +num.toFixed(2);
  } else return +num.toFixed(0);
}

function changeNum(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(num2 - num1);
  }
}

function changePercent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2) && num1 !== 0) {
    return simplify(changeNum(num1, num2) / num1);
  }
}

function percent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2) && num2 !== 0) {
    return simplify((num1 / num2) * 100);
  }
}

function discrepancy(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(Math.abs(num1 - num2));
  }
}

function sum(arr) {
  if (!validate.isArray(arr)) return;
  let total = 0;
  for (const n of arr) if (validate.isNumber(n)) total += n;
  return simplify(total);
}

function mean(arr) {
  const total = sum(arr);
  if (validate.isNumber(total)) return simplify(total / arr.length);
}

function median(arr) {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber).sort((a, b) => a - b);
  if (!numbers.length) return;
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2) return numbers[mid];
  return simplify((numbers[mid - 1] + numbers[mid]) / 2);
}

function mode(arr) {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  if (!numbers.length) return;
  const frequency = {};
  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  let res = ["", 0];
  for (const key of Object.keys(frequency)) {
    if (frequency[key] > res[1]) res = [key, frequency[key]];
  }
  return simplify(+res[0]);
}

function standarddeviation(arr) {
  if (!validate.isArray(arr)) return;
  const numbers = arr.filter(validate.isNumber);
  if (!numbers.length) return;
  const me = mean(numbers);
  const va = numbers.reduce((r, n) => r + Math.pow(n - me, 2), 0);
  const sq = Math.sqrt(va / numbers.length);
  return simplify(sq);
}

function efficiency(arr) {
  if (!validate.isArray(arr)) return;
  const total = sum(arr);
  if (!validate.isNumber(total)) return;
  const distance = sum(arr.map(Math.abs));
  const efficiency = simplify((Math.abs(total) / distance) * 100);
  if (!validate.isNumber(efficiency)) return -1;
  return efficiency;
}

function rate(start, end, periods = 1) {
  if (validate.isNumber(start) && validate.isNumber(end)) {
    return simplify((Math.pow(end / start, 1 / periods) - 1) * 100);
  }
}

function normalize(arr = []) {
  if (!validate.isArray(arr)) return;
  const numbers = [];
  let min = Infinity;
  let max = -Infinity;
  for (const v of arr) {
    if (validate.isNumber(v)) {
      if (v < min) {
        min = v;
      } else if (v > max) {
        max = v;
      }
      numbers.push(v);
    }
  }
  const range = max - min;
  if (range === 0) return numbers.map(() => 0);
  const numbers2 = [];
  for (const n of numbers) numbers2.push((n - min) / range);
  return numbers2;
}

module.exports = {
  num: simplify,
  change: {
    num: changeNum,
    percent: changePercent,
  },
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
