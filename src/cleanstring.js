const validate = require("./validate");
const stringStripHtml = require("string-strip-html");
const trim = require("./trim");
const he = require("he");

function cleanstring(string) {
  if (validate.isString(string)) {
    let clean = string;

    clean = stringStripHtml.stripHtml(clean).result;

    clean = he.decode(clean);

    clean = trim(clean);

    return clean;
  }

  return string;
}

module.exports = cleanstring;
