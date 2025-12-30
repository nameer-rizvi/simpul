import validate from "./validate";
import generalCount from "./generalCount";
import pluralize from "pluralize";

function countLabel(
  input: number,
  plural: string,
  asFullCount: boolean,
): { full: string; number: string; label: string } {
  let number = "";

  let label = "";

  if (validate.isNumber(input)) {
    number = asFullCount ? input.toLocaleString() : generalCount(input) || "0";
  }

  if (validate.isString(plural)) {
    label = validate.isNumber(input) ? pluralize(plural, input) : plural;
  }

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

export default countLabel;
