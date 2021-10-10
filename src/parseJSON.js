const tryCallback = require("./tryCallback");

const parseJSON = (json, callback) =>
  tryCallback(() => JSON.parse(json), callback);

module.exports = parseJSON;
