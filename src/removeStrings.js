const { isString } = require("./validate");

const removeStrings = (string, removes) =>
  isString(string)
    ? removes.reduce(
        (reducer, remove) => reducer.replace(new RegExp(remove, "gi"), ""),
        string
      )
    : "";

module.exports = removeStrings;
