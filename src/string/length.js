const { isStringValid } = require("../misc/validations");

module.exports = {
  char: (string) => isStringValid(string) && string.trim().length,
  words: (string) =>
    isStringValid(string) && string.trim().split(/\s+\b/).length,
};
