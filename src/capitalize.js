const { isStringValid } = require("./validations");

module.exports = (str) =>
  isStringValid(str) &&
  isStringValid(str)
    .charAt(0)
    .toUpperCase() + str.slice(1);
