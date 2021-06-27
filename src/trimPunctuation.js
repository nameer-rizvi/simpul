const trim = require("./trim");
const removePunctuation = require("./removePunctuation");

const trimPunctuation = (dirty, delimiter) =>
  trim(removePunctuation(dirty), delimiter);

module.exports = trimPunctuation;

// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//
// Not using because it removes unicode characters.
