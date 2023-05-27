const validate = require("./validate");
const generalizedCount = require("./generalizedCount");

function numberLabel(count, plural, fullCount) {
  const number = validate.isNumber(count)
    ? fullCount
      ? count.toLocaleString()
      : generalizedCount(count) || "0"
    : "";

  const label = validate.isString(plural)
    ? validate.isNumber(count)
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
