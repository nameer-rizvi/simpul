const { isString } = require("./validate");

const charLength = (string) => isString(string) && string.length;

const wordLength = (string) =>
  charLength(string) && string.match(/[\w\d’'-]+/gi).length;

// [1] Alternate: string.split(/\s+\b/).length
// [2] Alternate: string.match(/\w+/g).length

const stringLength = { char: charLength, word: wordLength };

module.exports = stringLength;
