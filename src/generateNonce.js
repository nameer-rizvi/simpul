const tryCallback = require("./tryCallback");
const crypto = require("crypto");

const generateNonce = (callback) =>
  tryCallback(() => crypto.randomBytes(16).toString("hex"), callback);

module.exports = generateNonce;
