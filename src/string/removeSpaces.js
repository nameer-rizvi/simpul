const { isStringValid } = require("../misc/validations");

module.exports = (string) =>
  isStringValid(string) && string.trim().replace(/\s+/g, "");
