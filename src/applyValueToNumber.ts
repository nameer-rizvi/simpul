import validate from "./validate";

function applyValueToNumber(
  number: number,
  value: number,
  operator: string = "+",
): number {
  if (!validate.isNumber(number) || !validate.isNumber(value)) return number;

  switch (operator) {
    case "+":
      return number + value;
    case "-":
      return number - value;
    case "*":
      return number * value;
    case "/":
      return number / value;
    case "+%":
      return number + (number * value) / 100;
    case "-%":
      return number - (number * value) / 100;
    default:
      return number;
  }
}

export default applyValueToNumber;
