import validate from "./validate";

function charLength(input: string): number | undefined {
  if (validate.isString(input)) {
    return Array.from(input).length;
  }
}
function wordLength(input: string): number | undefined {
  if (validate.isString(input)) {
    return input.match(/[\p{L}\p{N}’'-]+/gu)?.length ?? 0;
  }
}

export default { char: charLength, word: wordLength };
