const validate = require("./validate");

function trim(dirty, delimiter = " ") {
  if (validate.isString(dirty)) {
    return dirty.replace(/\s+/g, delimiter).trim();
  }
}

module.exports = trim;
