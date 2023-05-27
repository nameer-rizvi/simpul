const validate = require("./validate");

function removeStrings(string, removes = []) {
  if (validate.isString(string))
    return removes.reduce((reducer, remove) => {
      return reducer.replace(new RegExp(remove, "gi"), "");
    }, string);
}

module.exports = removeStrings;
