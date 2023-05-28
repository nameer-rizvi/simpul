const validate = require("./validate");

function changeNum(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return +(num2 - num1).toFixed(2);
  }
}

function changePercent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return +(((num1 - num2) / num1) * -100).toFixed(2);
  }
}

function mean(arr) {
  if (validate.isArray(arr)) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}

function median(arr) {
  if (validate.isArray(arr)) {
    arr = arr.filter(validate.isNumber);
    arr.sort();
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2) return arr[half];
    return (arr[half - 1] + arr[half]) / 2;
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
    const su = sq.reduce((a, b) => a + b);
    const di = su / arr.length;
    const sd = Math.sqrt(di);
    return sd;
  }
}

function percent(num1, num2) {
  if (validate.isNumber(num1) && validate.isNumber(num2)) {
    return +((+num1 / +num2) * 100).toFixed(2);
  }
}

module.exports = {
  change: {
    num: changeNum,
    percent: changePercent,
  },
  mean,
  median,
  mode,
  standarddeviation,
  percent,
};
