const { isStringValid } = require("./validations");

module.exports = {
  camelToSnake: (str) =>
    isStringValid(str) &&
    isStringValid(str)
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase(),
  snakeToCamel: (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase()),
  camelCase: (str) =>
    isStringValid(str) &&
    isStringValid(str)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()),
  unCamelCase: (str) =>
    isStringValid(str) &&
    isStringValid(str)
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()),
  camelToKebob: (str) =>
    isStringValid(str) &&
    isStringValid(str)
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, "$1-$2")
      .toLowerCase(),
};
