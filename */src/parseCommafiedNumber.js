const validate = require("./validate");

function parseCommafiedNumber(string) {
  if (validate.isString(string)) {
    return parseFloat(string.split(" ")[0].replace(/,/g, "")) || 0;
  }
}

module.exports = parseCommafiedNumber;
