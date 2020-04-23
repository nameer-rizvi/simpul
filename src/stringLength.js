const stringExists = require("./stringExists");

module.exports = {
  char: (str) => stringExists(str) && stringExists(str).length,
  words: (str) => stringExists(str) && stringExists(str).split(/\s+/).length,
};
