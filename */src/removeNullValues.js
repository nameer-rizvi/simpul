const validate = require("./validate");

function removeNullValues(object = {}) {
  const clean = {};

  for (const key of Object.keys(object)) {
    const value = object[key];
    if (validate.isValid(value)) clean[key] = value;
  }

  return clean;
}

module.exports = removeNullValues;
