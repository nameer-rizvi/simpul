const { isString, isArray } = require("./validate");
const trim = require("./trim");

function uniqueStrings(tokens, replaceWith, charCase) {
  if (isString(tokens))
    tokens = tokens
      .trim(tokens)
      .split(" ")
      .filter(Boolean);

  let uniqueTokens = [];

  if (isArray(tokens)) {
    const cleans = [];

    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (replaceWith) token = token.replace(replaceWith, "");
      token = trim(token, "");
      if (token) cleans.push(charCase ? token[charCase]() : token);
    }

    uniqueTokens = [...new Set(cleans)];
  }

  return { array: uniqueTokens, stringified: uniqueTokens.join(" ") };
}

module.exports = uniqueStrings;
