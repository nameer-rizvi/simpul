import validate from "./validate";

function removePunctuation(input: unknown, delimiter = ""): string | undefined {
  if (validate.isString(input)) {
    return input.replace(/[^\w\s]|_/g, delimiter);
  }
}

export default removePunctuation;
