import validate from "./validate";
import generalcount from "./generalcount";
import pluralize from "pluralize";

function countlabel(
  count: number,
  plural: string,
  fullCount: boolean,
): { full: string; number: string; label: string } {
  let number = "";

  let label = "";

  if (validate.isNumber(count)) {
    number = fullCount ? count.toLocaleString() : generalcount(count) || "0";
  }

  if (validate.isString(plural)) {
    label = validate.isNumber(count) ? pluralize(plural, count) : plural;
  }

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

export default countlabel;
