const { isStringValid } = require("./validations");

module.exports = {
  encode: (value) =>
    isStringValid(value) && Buffer.from(value).toString("base64"),
  decode: (base64) =>
    isStringValid(base64) && Buffer.from(base64, "base64").toString(),
  encodeJSON: (json) => Buffer.from(JSON.stringify(json)).toString("base64"),
  decodeJSON: (base64) => JSON.parse(Buffer.from(base64, "base64").toString()),
};
