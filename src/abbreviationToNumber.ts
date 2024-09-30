import validate from "./validate";

function abbreviationToNumber(
  abbreviation: string | number,
): number | undefined {
  if (validate.isNumber(abbreviation)) return Number(abbreviation);

  if (!validate.isString(abbreviation)) return;

  const cleanAbbreviation = (abbreviation as string).replace(/ /g, "");

  const key = cleanAbbreviation.slice(-1).toLowerCase();

  const digits = { t: 12, b: 9, m: 6, k: 3 }[key];

  if (!digits) return Number(cleanAbbreviation);

  const parts = cleanAbbreviation.slice(0, -1).split(".");

  let numberString = parts[0];

  if (parts[1]) numberString += parts[1].slice(0, digits);

  numberString = numberString.padEnd(parts[0].length + digits, "0");

  return Number(numberString);
}

export default abbreviationToNumber;
