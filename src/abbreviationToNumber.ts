import validate from "./validate";

function abbreviationToNumber(input: unknown): number | undefined {
  if (validate.isNumber(input)) {
    return input;
  }

  if (validate.isNumberString(input)) {
    return Number(input);
  }

  if (validate.isString(input)) {
    const clean = input.replace(/\s+|,/g, "");

    if (!clean) return;

    const key = clean[clean.length - 1].toLowerCase();

    const power = { k: 3, m: 6, b: 9, t: 12 }[key];

    if (!power) {
      return parseFloat(clean) || undefined;
    }

    const number = Number(clean.slice(0, -1));

    if (validate.isNumberValid(number)) {
      return number * 10 ** power;
    }
  }
}

export default abbreviationToNumber;
