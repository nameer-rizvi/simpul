import validate from "./validate";

function applyValueToNumber(
  input: number,
  value: number,
  operator: string = "+",
): number {
  if (!validate.isNumberValid(input) || !validate.isNumberValid(value)) {
    return input;
  }

  switch (operator) {
    case "+":
      return input + value;
    case "-":
      return input - value;
    case "*":
      return input * value;
    case "**":
      return input ** value;
    case "/":
      return value !== 0 ? input / value : input;
    case "+%":
      return input * (1 + value / 100);
    case "-%":
      return input * (1 - value / 100);
    default:
      return input;
  }
}

export default applyValueToNumber;
