const { isNumber, isString } = require("./validate");

// https://stackoverflow.com/a/39466341

function ordinalized(number) {
  if (isNumber(number)) {
    if (isString(number)) number = +number;

    const ordinals = ["", "st", "nd", "rd"];

    const index = (number / 10) % 10 ^ 1 && number % 10;

    return number.toLocaleString() + (ordinals[index] || "th");
  }
}

module.exports = ordinalized;
