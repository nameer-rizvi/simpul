import validate from "./validate";

function abbreviationToNumber(input: string | number): number | undefined {
  if (validate.isNumber(input)) return input;

  if (!validate.isString(input)) return;

  const clean = input.replace(/\s+|\,/g, "");

  if (!clean) return;

  const key = clean[clean.length - 1].toLowerCase();

  const power = { k: 3, m: 6, b: 9, t: 12 }[key];

  if (!power) return parseFloat(clean);

  const base = clean.slice(0, -1);

  const number = Number(base);

  if (!Number.isFinite(number)) return;

  return number * 10 ** power;
}

export default abbreviationToNumber;
