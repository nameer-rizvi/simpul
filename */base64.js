const validate = require("./validate");

function encode(value) {
  if (!validate.isString(value)) return;
  return Buffer.from(value).toString("base64");
}

function decode(base64) {
  if (!validate.isBase64(base64)) return;
  return Buffer.from(base64, "base64").toString();
}

function encodeJSON(json) {
  if (!validate.isJSON(json)) return;
  return Buffer.from(JSON.stringify(json)).toString("base64");
}

function decodeJSON(base64) {
  if (!validate.isBase64(base64)) return;
  return JSON.parse(Buffer.from(base64, "base64").toString());
}

module.exports = { encode, decode, encodeJSON, decodeJSON };
