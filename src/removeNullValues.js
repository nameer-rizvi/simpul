const validate = require("./validate");

function removeNullValues(object = {}) {
  const clean = {};

  for (let key of Object.keys(object)) {
    let value = object[key];
    if (validate.isValid(value)) clean[key] = value;
  }

  return clean;
}

module.exports = removeNullValues;
