const { isStringValid } = require("../misc/validations");

module.exports = (string) =>
  isStringValid(string) &&
  string
    .trim()
    .charAt(0)
    .toUpperCase() + string.slice(1);
