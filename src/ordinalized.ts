import validate from "./validate";

function ordinalized(number: number | string): string | undefined {
  if (validate.isNumber(number)) {
    if (validate.isString(number)) number = +number;

    const index = (number / 10) % 10 ^ 1 && number % 10;

    const ending = ["", "st", "nd", "rd"][Math.abs(index)] || "th";

    return number.toLocaleString() + ending;
  }
}

export default ordinalized;
