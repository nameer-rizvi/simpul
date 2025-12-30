import validate from "./validate";
import escaper from "./escaper";

function removeStrings(
  input: unknown,
  removes: (string | RegExp)[] = [],
): string | undefined {
  if (!validate.isString(input) || !validate.isArrayNonEmpty(removes)) {
    return validate.isString(input) ? input : "";
  }

  let result = input;

  for (const r of removes) {
    if (validate.isRegex(r)) {
      result = result.replace(new RegExp(r.source, "gi"), "");
    } else if (validate.isString(r)) {
      result = result.replace(new RegExp(escaper(r)!, "gi"), "");
    }
  }

  return result;
}

export default removeStrings;
