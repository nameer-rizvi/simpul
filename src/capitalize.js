const validate = require("./validate");

function capitalize(string) {
  if (!validate.isString(string)) return;

  const trimmed = string.trim();

  if (trimmed.length === 0) return ""; // Handle edge case of an empty string after trimming.

  return trimmed[0].toUpperCase() + trimmed.slice(1);
}

module.exports = capitalize;
