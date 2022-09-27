const { isString } = require("./validate");

const replaceStrings = (string, replaces) =>
  isString(string)
    ? replaces.reduce(
        (reducer, replace) =>
          reducer.replace(new RegExp(replace[0], "gi"), replace[1]),
        string
      )
    : "";

module.exports = replaceStrings;
