const validate = require("./validate");

function charlength(string) {
  if (validate.isString(string)) {
    return string.length;
  }
}

function wordlength(string) {
  if (validate.isStringValid(string)) {
    return string.match(/[\w\d’'-]+/gi).length;
  }
}

// [1] Alternate: string.split(/\s+\b/).length
// [2] Alternate: string.match(/\w+/g).length

const stringlength = { char: charlength, word: wordlength };

module.exports = stringlength;
