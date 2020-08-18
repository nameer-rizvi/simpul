const { isString } = require("../misc/validations");
const safe = require("safe-regex");

exports.clean = (string) =>
  isString(string)
    ? safe(string)
      ? string.trim().replace(/\s+/g, " ")
      : string.trim()
    : string;

exports.remove = (string) =>
  isString(string)
    ? safe(string)
      ? string.trim().replace(/\s+/g, "")
      : string.trim()
    : string;
