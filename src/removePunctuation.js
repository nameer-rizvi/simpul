const { isString } = require("./validate");

const removePunctuation = (dirty, delimiter = "") =>
  isString(dirty)
    ? dirty.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/gi, delimiter)
    : dirty;

module.exports = removePunctuation;
