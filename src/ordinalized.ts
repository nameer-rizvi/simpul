import validate from "./validate";

function ordinalized(input: number | string): string | undefined {
  if (validate.isNumeric(input)) {
    const number = validate.isString(input) ? Number(input) : input;

    const index = (number / 10) % 10 ^ 1 && number % 10;

    const suffix = ["th", "st", "nd", "rd"][Math.abs(index)] || "th";

    return number.toLocaleString() + suffix;
  }
}

export default ordinalized;
