const { isStringValid } = require("./validations");

module.exports = {
  encode: (str) => isStringValid(str) && Buffer.from(str).toString("base64"),
  decode: (base64) =>
    isStringValid(base64) && Buffer.from(base64, "base64").toString(),
};
