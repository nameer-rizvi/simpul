const { isString } = require("./validate");

const charLength = (string) => isString(string) && string.length;

const wordLength = (string) =>
  charLength(string) && string.match(/[\w\d’'-]+/gi).length;

// Other wordLength options...
//  .split(/\s+\b/).length
//  .match(/\w+/g)

const stringLength = { char: charLength, word: wordLength };

module.exports = stringLength;
