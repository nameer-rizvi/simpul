const stringExists = require("./stringExists");

module.exports = {
  camelToSnake: (str) =>
    stringExists(str) &&
    stringExists(str)
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase(),
  snakeToCamel: (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase()),
  camelCase: (str) =>
    stringExists(str) &&
    stringExists(str)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()),
  unCamelCase: (str) =>
    stringExists(str) &&
    stringExists(str)
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()),
};
