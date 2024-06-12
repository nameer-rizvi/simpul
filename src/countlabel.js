const validate = require("./validate");
const generalcount = require("./generalcount");

function replacer(string, oldPart, newPart) {
  return string.substring(0, string.lastIndexOf(oldPart)) + newPart;
}

function pluralize(label, count) {
  if (Math.abs(count) === 1) {
    if (label.endsWith("ies")) {
      return replacer(label, "ies", "y");
    } else if (label.endsWith("oes")) {
      return replacer(label, "oes", "o");
    } else if (label.endsWith("s")) {
      return label.slice(0, -1);
    } else {
      return label;
    }
  } else {
    if (label.endsWith("y")) {
      return replacer(label, "y", "ies");
    } else if (label.endsWith("o")) {
      return replacer(label, "o", "oes");
    } else if (!label.endsWith("s")) {
      return label + "s";
    } else {
      return label;
    }
  }
}

function countlabel(count, plural, fullCount) {
  const number = validate.isNumber(count)
    ? fullCount
      ? count.toLocaleString()
      : generalcount(count) || "0"
    : "";

  const label = validate.isString(plural)
    ? number
      ? pluralize(plural, count)
      : plural
    : "";

  const full = [number, label].filter(Boolean).join(" ");

  return { full, number, label };
}

module.exports = countlabel;
