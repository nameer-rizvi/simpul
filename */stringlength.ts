import validate from "./validate";

function charLength(string: string): number | undefined {
  if (validate.isString(string)) {
    return string.length;
  }
}

function wordLength(string: string): number | undefined {
  if (validate.isString(string)) {
    const matches = string.match(/[\w\d’'-]+/gi);
    return matches ? matches.length : 0;
  }
}

// [1] Alternate: string.split(/\s+\b/).length
// [2] Alternate: string.match(/\w+/g).length

export default { char: charLength, word: wordLength };
