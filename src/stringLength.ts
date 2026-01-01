import validate from "./validate";

function charLength(input: unknown): number | undefined {
  if (validate.isString(input)) {
    return Array.from(input).length;
  }
}

function wordLength(input: unknown): number | undefined {
  if (validate.isString(input)) {
    return input.match(/[\p{L}\p{N}’'-]+/gu)?.length ?? 0;
  }
}

function wordLength2(input: unknown): number | undefined {
  if (validate.isString(input)) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < input.length; i++) {
      if (/\s/.test(input[i])) {
        inWord = false;
      } else if (!inWord) {
        count++;
        inWord = true;
      }
    }
    return count;
  }
}

export default { char: charLength, word: wordLength, word2: wordLength2 };
