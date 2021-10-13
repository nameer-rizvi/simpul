const { isString } = require("./validate");

const trim = (dirty, delimiter = " ") =>
  isString(dirty) ? dirty.replace(/\s+/g, delimiter).trim() : dirty;

module.exports = trim;
