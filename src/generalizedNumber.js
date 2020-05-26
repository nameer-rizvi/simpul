const { isNumber } = require("./validations");

module.exports = (num) =>
  isNumber(num)
    ? num >= 1000000000
      ? (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "b"
      : num >= 1000000
      ? (num / 1000000).toFixed(1).replace(/\.0$/, "") + "m"
      : num >= 1000
      ? (num / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : num
    : 0;
