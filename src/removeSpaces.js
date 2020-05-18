const { isStringValid } = require("./validations");

module.exports = (str) =>
  isStringValid(str) && isStringValid(str).replace(/\s+/g, "");
