const { isString } = require("./validations");

const capitalize = (string) =>
  isString(string)
    ? string
        .trim()
        .charAt(0)
        .toUpperCase() + string.trim().slice(1)
    : string;

module.exports = capitalize;
