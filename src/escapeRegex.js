const validate = require("./validate");

function escapeRegex(dirty) {
  if (validate.isString(dirty)) {
    return dirty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

module.exports = escapeRegex;

// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
