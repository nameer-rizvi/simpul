import validate from "./validate";

function applyValueToNumber(
  inputA: number,
  inputB: number,
  operator: string = "+",
): number {
  if (!validate.isNumberValid(inputA) || !validate.isNumberValid(inputB)) {
    return inputA;
  }

  switch (operator) {
    case "+":
      return inputA + inputB;
    case "-":
      return inputA - inputB;
    case "*":
      return inputA * inputB;
    case "/":
      return inputB !== 0 ? inputA / inputB : inputA;
    case "+%":
      return inputA * (1 + inputB / 100);
    case "-%":
      return inputA * (1 - inputB / 100);
    default:
      return inputA;
  }
}

export default applyValueToNumber;
