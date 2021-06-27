const { isString } = require("./validations");

const trim = (dirty, delimiter = " ") =>
  isString(dirty) ? dirty.replace(/\s+/g, delimiter).trim() : dirty;

module.exports = trim;
