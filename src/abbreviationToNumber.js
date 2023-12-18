const validate = require("./validate");

function abbreviationToNumber(abbreviation) {
  if (validate.isString(abbreviation)) {
    const key = abbreviation.slice(-1).toLowerCase();

    const digits = { t: 12, b: 9, m: 6, k: 3 }[key];

    if (digits) {
      const splits = abbreviation.replace(/ /, "").slice(0, -1).split(".");

      let stringified = splits[0];

      for (let i = 0; i < digits; i++) stringified += splits[1]?.[i] ?? "0";

      return Number(stringified);
    }

    return Number(abbreviation);
  }
}

module.exports = abbreviationToNumber;
