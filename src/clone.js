const tryCallback = require("./tryCallback");

function clone(json, callback) {
  return tryCallback(() => JSON.parse(JSON.stringify(json)), callback);
}

module.exports = clone;
