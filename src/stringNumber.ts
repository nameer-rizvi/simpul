import validate from "./validate";

function stringNumber(input: unknown): number | undefined {
  if (validate.isString(input)) {
    return Number(input.replace(/[^0-9.-]+/g, ""));
  } else if (validate.isNumber(input)) {
    return input;
  }
}

export default stringNumber;
