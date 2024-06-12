const validate = require("./validate");
const trim = require("./trim");
const he = require("he");
const stringStripHtml = require("string-strip-html");

function cleanstring(string) {
  if (!validate.isString(string)) return string;
  return trim(he.decode(stringStripHtml.stripHtml(string).result));
}

module.exports = cleanstring;
