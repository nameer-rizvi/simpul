const tryCallback = require("./tryCallback");

const encode = (value, callback) =>
  tryCallback(() => Buffer.from(value).toString("base64"), callback);

const decode = (base64, callback) =>
  tryCallback(() => Buffer.from(base64, "base64").toString(), callback);

const encodeJSON = (json, callback) =>
  tryCallback(
    () => Buffer.from(JSON.stringify(json)).toString("base64"),
    callback
  );

const decodeJSON = (base64, callback) =>
  tryCallback(
    () => JSON.parse(Buffer.from(base64, "base64").toString()),
    callback
  );

const base64 = { encode, decode, encodeJSON, decodeJSON };

module.exports = base64;
