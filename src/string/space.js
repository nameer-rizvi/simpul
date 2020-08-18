const { isString } = require("../misc/validations");
const safe = require("safe-regex");

const space = (string, replace) =>
  isString(string)
    ? safe(string)
      ? string.trim().replace(/\s+/g, replace)
      : string.trim()
    : string;

exports.clean = (string) => space(string, " ");

exports.remove = (string) => space(string, "");
