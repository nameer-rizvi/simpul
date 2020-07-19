const { isStringValid } = require("./validations");
const safe = require("safe-regex");

module.exports = (string) =>
  isStringValid(string)
    ? safe(string)
      ? string.replace(/\s+/g, " ").trim()
      : string.trim()
    : string;
