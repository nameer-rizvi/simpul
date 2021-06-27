const { isString } = require("./validations");

const escapeRegex = (dirty) =>
  isString(dirty) ? dirty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : dirty;

module.exports = escapeRegex;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
