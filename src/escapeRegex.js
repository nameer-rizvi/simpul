const { isString } = require("./validate");

const escapeRegex = (dirty) =>
  isString(dirty) ? dirty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "";

module.exports = escapeRegex;

// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
