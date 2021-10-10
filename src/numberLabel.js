const { isNumber, isString } = require("./validations");
const generalizedCount = require("./generalizedCount");

function numberLabel(count, plural, showAlt) {
  const number = isNumber(count)
    ? showAlt
      ? count.toLocaleString()
      : generalizedCount(count).toString()
    : "0";

  const label = isString(plural)
    ? isNumber(count)
      ? count === 1
        ? plural.endsWith("ies")
          ? plural.replace("ies", "y")
          : plural.endsWith("s")
          ? plural.slice(0, -1)
          : plural
        : plural.endsWith("y")
        ? plural.replace("y", "ies")
        : !plural.endsWith("s")
        ? (plural += "s")
        : plural
      : plural
    : "";

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

module.exports = numberLabel;
