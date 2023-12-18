const validate = require("./validate");

function simplify(num) {
  // Readable number.
  if (validate.isNumber(num)) {
    if (num > -0.001 && num < 0.001) {
      return +num.toFixed(6);
    } else if (num > -1 && num < 1) {
      return +num.toFixed(4);
    } else if (num > -1000 && num < 1000) {
      return +num.toFixed(2);
    } else {
      return +num.toFixed(0);
    }
  }
}

function changeNum(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(num2 - num1);
  }
}

function changePercent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(changeNum(num1, num2) / num1);
  }
}

function percent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify((num1 / num2) * 100);
  }
}

function discrepancy(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return simplify(Math.abs(num1 - num2));
  }
}

function sum(arr) {
  if (validate.isArray(arr)) {
    arr = arr.filter(validate.isNumber);
    return simplify(arr.reduce((r, p) => r + p, 0));
  }
}

function mean(arr) {
  const sum2 = sum(arr);
  if (validate.isNumber(sum2)) return simplify(sum2 / arr.length);
}

function median(arr) {
  if (validate.isArray(arr)) {
    arr = arr.filter(validate.isNumber);
    arr.sort();
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2) return arr[half];
    return simplify((arr[half - 1] + arr[half]) / 2);
  }
}

function mode(arr) {
  if (validate.isArray(arr)) {
    arr = arr.filter(validate.isNumber);
    arr.sort((a, b) => {
      const aLength = arr.filter((v) => v === a).length;
      const bLength = arr.filter((v) => v === b).length;
      return aLength - bLength;
    });
    return arr.pop();
  }
}

function standarddeviation(arr) {
  if (validate.isArray(arr)) {
    arr = arr.filter(validate.isNumber);
    const me = mean(arr);
    const sq = arr.map((nu) => Math.pow(nu - me, 2));
    const su = sq.reduce((a, b) => a + b, 0);
    const di = su / arr.length;
    const sd = Math.sqrt(di);
    return simplify(sd);
  }
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
};
