import validate from "./validate";

function listify(input: any, delimiter = ","): string[] {
  if (validate.isString(input)) {
    return input
      .split(delimiter)
      .map((i) => i.trim())
      .filter(Boolean);
  }

  return [];
}

export default listify;
