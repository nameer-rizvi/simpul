import validate from "./validate";

function trim(input: string, delimiter: string = " "): string | undefined {
  if (validate.isString(input)) {
    return input.trim().replace(/\s+/g, delimiter);
  }
}

export default trim;
