const { isStringValid } = require("./validations");

module.exports = {
  encode: (value) => value && Buffer.from(value).toString("base64"),
  decode: (base64) =>
    isStringValid(base64) && Buffer.from(base64, "base64").toString(),
};
