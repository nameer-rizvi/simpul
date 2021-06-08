const { isString } = require("./validations");

const cleanSpace = (dirty, delimiter = " ") =>
  isString(dirty) ? dirty.replace(/\s+/g, delimiter).trim() : dirty;

// ([!:;,.?])

module.exports = cleanSpace;
