const validate = require("./validate");

function abbreviationToNumber(abbreviation) {
  if (validate.isNumber(abbreviation)) return Number(abbreviation);

  if (!validate.isString(abbreviation)) return;

  abbreviation = abbreviation.replace(/ /g, "");

  const key = abbreviation.slice(-1).toLowerCase();

  const digits = { t: 12, b: 9, m: 6, k: 3 }[key];

  if (!digits) return Number(abbreviation);

  const parts = abbreviation.slice(0, -1).split(".");

  let numberString = parts[0];

  if (parts[1]) numberString += parts[1].slice(0, digits);

  numberString = numberString.padEnd(parts[0].length + digits, "0");

  return Number(numberString);
}

module.exports = abbreviationToNumber;
