const { isString } = require("./validations");

const cleanSpace = (dirty) =>
  isString(dirty) ? dirty.replace(/\s+/g, " ").trim() : dirty;

// ([!:;,.?])

module.exports = cleanSpace;
