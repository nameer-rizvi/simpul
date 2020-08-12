const { isStringValid } = require("../misc/validations");

module.exports = (date) =>
  new Date(isDate(date) ? date : new Date())
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
