const tryCallback = require("./tryCallback");

const clone = (json, callback) =>
  tryCallback(() => JSON.parse(JSON.stringify(json)), callback);

module.exports = clone;
