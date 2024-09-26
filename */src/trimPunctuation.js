const trim = require("./trim");
const removePunctuation = require("./removePunctuation");

function trimPunctuation(dirty, delimiter) {
  return trim(removePunctuation(dirty), delimiter);
}

module.exports = trimPunctuation;

// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//     Not using because it removes unicode characters.
