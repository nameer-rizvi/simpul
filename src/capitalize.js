const stringExists = require("./stringExists");

module.exports = (str) =>
  stringExists(str) && str.charAt(0).toUpperCase() + str.slice(1);
