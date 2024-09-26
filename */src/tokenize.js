const validate = require("./validate");
const trimPunctuation = require("./trimPunctuation");

function tokenize(string) {
  const tokens = validate.isString(string)
    ? trimPunctuation(string).split(" ").filter(Boolean)
    : [];

  return { tokens, set: [...new Set(tokens)] };
}

module.exports = tokenize;
