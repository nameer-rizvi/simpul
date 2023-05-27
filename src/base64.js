const validate = require("./validate");

function encode(value) {
  if (validate.isString(value)) {
    return Buffer.from(value).toString("base64");
  }
}

function decode(base64) {
  if (validate.isBase64(base64)) {
    return Buffer.from(base64, "base64").toString();
  }
}

function encodeJSON(json) {
  if (validate.isJSON(json)) {
    return Buffer.from(JSON.stringify(json)).toString("base64");
  }
}

function decodeJSON(base64) {
  if (validate.isBase64(base64)) {
    return JSON.parse(Buffer.from(base64, "base64").toString());
  }
}

const base64 = { encode, decode, encodeJSON, decodeJSON };

module.exports = base64;
