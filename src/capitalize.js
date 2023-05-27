const validate = require("./validate");

function capitalize(string) {
  if (validate.isString(string)) {
    const trimmed = string.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }
}

module.exports = capitalize;
