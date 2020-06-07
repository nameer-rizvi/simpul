const { isStringValid } = require("./validations");

module.exports = {
  encode: (value) =>
    value && Buffer.from(JSON.stringify(value)).toString("base64"),
  decode: (base64) =>
    isStringValid(base64) &&
    JSON.parse(Buffer.from(base64, "base64").toString()),
};
