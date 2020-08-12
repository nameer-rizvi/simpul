const {
  isStringValid,
  isBase64,
  isJSON,
  isJSONString,
} = require("./validations");

module.exports = {
  encode: (value) => {
    const buffer = isStringValid(value) && Buffer.from(value);
    return buffer && buffer.toString("base64");
  },
  decode: (base64) => {
    const buffer = isBase64(base64) && Buffer.from(base64, "base64");
    return buffer && buffer.toString();
  },
  encodeJSON: (json) => {
    const buffer = isJSON(json) && Buffer.from(JSON.stringify(json));
    return buffer && buffer.toString("base64");
  },
  decodeJSON: (base64) => {
    var buffer = isBase64(base64) && Buffer.from(base64, "base64");
    buffer = buffer && buffer.toString();
    return isJSONString(buffer) && JSON.parse(buffer);
  },
};
