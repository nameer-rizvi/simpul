const validate = require("./validate");
const cleanstring = require("./cleanstring");
const trimPunctuation = require("./trimPunctuation");

// Generate URL-friendly slug. Order of operations is important.
function slug(input, maxlength = 2000) {
  if (!validate.isString(input)) return "";

  let output = input;

  output = cleanstring(output);

  output = trimPunctuation(output);

  output = output.replace(/ /g, "_");

  output = encodeURIComponent(output);

  output = output.substring(0, maxlength);

  output = output.toLowerCase();

  return output;
}

module.exports = slug;
