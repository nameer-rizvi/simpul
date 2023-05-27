const tryCallback = require("./tryCallback");

function parseJSON(json, callback) {
  return tryCallback(() => JSON.parse(json), callback);
}

module.exports = parseJSON;
