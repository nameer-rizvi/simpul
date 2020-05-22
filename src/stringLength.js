const { isStringValid } = require("./validations");

module.exports = {
  char: (str) => isStringValid(str) && isStringValid(str).length,
  words: (str) =>
    isStringValid(str) && isStringValid(str).split(/\s+\b/).length,
};
