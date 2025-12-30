import validate from "./validate";

function parseCommafiedNumber(input: string): number {
  if (validate.isString(input)) {
    const match = input.trim().match(/^\(?-?[\d,]+(?:\.\d+)?\)?/);
    if (!match) return 0;
    const normalized = match[0].replace(/[(),]/g, "").trim();
    const value = Number(normalized);
    return Number.isFinite(value) ? value : 0;
  }
  return 0;
}

export default parseCommafiedNumber;
