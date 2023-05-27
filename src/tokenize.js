const validate = require("./validate");
const trim = require("./trim");

function tokenize(string) {
  const tokens = validate.isString(string)
    ? trim(string)
        .split(" ")
        .filter(Boolean)
    : [];

  return { tokens, set: [...new Set(tokens)] };
}

module.exports = tokenize;
