const validate = require("./validate");
const generalcount = require("./generalcount");

function countlabel(count, plural, fullCount) {
  const number = validate.isNumber(count)
    ? fullCount
      ? count.toLocaleString()
      : generalcount(count) || "0"
    : "";

  const label = validate.isString(plural)
    ? number
      ? Math.abs(count) === 1
        ? plural.endsWith("ies")
          ? replacer(plural, "ies", "y")
          : plural.endsWith("s")
          ? plural.slice(0, -1)
          : plural
        : plural.endsWith("y")
        ? replacer(plural, "y", "ies")
        : !plural.endsWith("s")
        ? (plural += "s")
        : plural
      : plural
    : "";

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

function replacer(string, r1, r2) {
  return string.substring(0, string.lastIndexOf(r1)) + r2;
}

module.exports = countlabel;
