const { isJSON } = require("./validations");

module.exports = (original) =>
  isJSON(original) && JSON.parse(JSON.stringify(original));
