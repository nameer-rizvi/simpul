const validate = require("./validate");

function ordinalized(number) {
  if (validate.isNumber(number)) {
    if (validate.isString(number)) number = +number;

    const index = (number / 10) % 10 ^ 1 && number % 10;

    return number.toLocaleString() + (["", "st", "nd", "rd"][index] || "th");
  }
}

module.exports = ordinalized;

// Source: https://stackoverflow.com/a/39466341
