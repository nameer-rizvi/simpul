const { isNumber, isArray } = require("./validate");

const changeNum = (num1, num2) =>
  isNumber(num1) && isNumber(num2) && +(num2 - num1).toFixed(2);

const changePercent = (num1, num2) =>
  isNumber(num1) &&
  isNumber(num2) &&
  +(((num1 - num2) / num1) * -100).toFixed(2);

const mean = (arr) =>
  isArray(arr) && arr.reduce((a, b) => a + b, 0) / arr.length;

function median(arr) {
  if (isArray(arr)) {
    arr.sort();
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2) return arr[half];
    return (arr[half - 1] + arr[half]) / 2;
  }
}

const mode = (arr) =>
  isArray(arr) &&
  arr
    .sort((a, b) => {
      const aLength = arr.filter((v) => v === a).length;
      const bLength = arr.filter((v) => v === b).length;
      return aLength - bLength;
    })
    .pop();

module.exports = {
  change: { num: changeNum, percent: changePercent },
  mean,
  median,
  mode,
};
