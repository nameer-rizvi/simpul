import validate from "./validate";

function stringNumber(input: string): number | undefined {
  if (validate.isString(input)) {
    return Number(input.replace(/[^0-9.-]+/g, ""));
  }
}

export default stringNumber;
