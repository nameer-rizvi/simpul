import validate from "./validate";

function trim(input: unknown, delimiter = " "): string | undefined {
  if (validate.isString(input)) {
    return input.trim().replace(/\s+/g, delimiter);
  }
}

export default trim;
