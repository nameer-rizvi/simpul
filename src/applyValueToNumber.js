const validate = require("./validate");

function applyValueToNumber(number, value, operator = "+") {
  if (!validate.isNumber(number) || !validate.isNumber(value)) return number;

  switch (operator) {
    case "+":
      return number + value;
    case "-":
      return number - value;
    case "*":
      return number * value;
    case "/":
      return number / value;
    case "+%":
      return number + (number * value) / 100;
    case "-%":
      return number - (number * value) / 100;
    default:
      return number;
  }
}

module.exports = applyValueToNumber;
