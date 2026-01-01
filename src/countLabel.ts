import validate from "./validate";
import generalCount from "./generalCount";
import pluralize from "pluralize";

function countLabel(
  input: unknown,
  singular: unknown,
  asFullCount?: boolean,
): { full: string; number: string; label: string } {
  let number = "";

  let label = "";

  if (validate.isNumber(input)) {
    number = asFullCount ? input.toLocaleString() : generalCount(input) || "0";
  }

  if (validate.isString(singular)) {
    label = validate.isNumber(input) ? pluralize(singular, input) : singular;
  }

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

export default countLabel;
