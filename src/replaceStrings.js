const validate = require("./validate");

function replaceStrings(string, replaces = []) {
  if (validate.isString(string)) {
    return replaces.reduce((reducer, replace) => {
      return reducer.replace(new RegExp(replace[0], "gi"), replace[1]);
    }, string);
  }
}

module.exports = replaceStrings;
