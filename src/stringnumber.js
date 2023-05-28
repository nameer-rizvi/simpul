const validate = require("./validate");

function stringnumber(string) {
  if (validate.isString(string)) {
    return Number(string.replace(/[^0-9.-]+/g, ""));
  }
}

module.exports = stringnumber;
