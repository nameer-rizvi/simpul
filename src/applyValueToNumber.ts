import validate from "./validate";

function applyValueToNumber(
  number: number,
  value: number,
  operator: string = "+",
): number {
  if (!validate.isNumberValid(number) || !validate.isNumberValid(value)) {
    return number;
  }

  switch (operator) {
    case "+":
      return number + value;
    case "-":
      return number - value;
    case "*":
      return number * value;
    case "/":
      return value !== 0 ? number / value : number;
    case "+%":
      return number * (1 + value / 100);
    case "-%":
      return number * (1 - value / 100);
    default:
      return number;
  }
}

export default applyValueToNumber;
