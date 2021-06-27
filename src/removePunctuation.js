const { isString } = require("./validations");

const removePunctuation = (dirty, delimiter = "") =>
  isString(dirty)
    ? dirty.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/gi, delimiter)
    : dirty;

module.exports = removePunctuation;
