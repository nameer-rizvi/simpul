const validate = require("./validate");

function applyValueToNumber(number, value, operator = "+") {
  if (validate.isNumber(number) && validate.isNumber(value)) {
    if (operator === "+") {
      number += value;
    } else if (operator === "-") {
      number -= value;
    } else if (operator === "*") {
      number *= value;
    } else if (operator === "/") {
      number /= value;
    } else if (operator === "+%") {
      number += number * (value / 100);
    } else if (operator === "-%") {
      number -= number * (value / 100);
    }
  }
  return number;
}

module.exports = applyValueToNumber;
