const validate = require("./validate");

function charLength(string) {
  if (validate.isString(string)) {
    return string.length;
  }
}

function wordLength(string) {
  if (validate.isStringValid(string)) {
    return string.match(/[\w\d’'-]+/gi).length;
  }
}

// [1] Alternate: string.split(/\s+\b/).length
// [2] Alternate: string.match(/\w+/g).length

const stringLength = { char: charLength, word: wordLength };

module.exports = stringLength;
