const stringExists = require("./stringExists");

module.exports = (str) =>
  stringExists(str) && stringExists(str).replace(/\s+/g, "");
