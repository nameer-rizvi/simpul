import validate from "./validate";
import escaper from "./escaper";

function replaceStrings(
  input: unknown,
  replaces: [string | RegExp, string][] = [],
): string | undefined {
  if (!validate.isString(input) || !validate.isArrayNonEmpty(replaces)) {
    return validate.isString(input) ? input : "";
  }

  let result = input;

  for (const r of replaces) {
    if (validate.isRegex(r[0])) {
      result = result.replace(new RegExp(r[0].source, "gi"), r[1]);
    } else if (validate.isString(r[0])) {
      result = result.replace(new RegExp(escaper(r[0])!, "gi"), r[1]);
    }
  }

  return result;
}

export default replaceStrings;
