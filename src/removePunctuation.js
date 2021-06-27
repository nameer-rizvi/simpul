const { isString } = require("./validations");

const removePunctuation = (string) =>
  isString(string)
    ? string.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/gi, "")
    : string;

module.exports = removePunctuation;
