const trycallback = require("./trycallback");

function clone(json, callback) {
  return trycallback(() => JSON.parse(JSON.stringify(json)), callback);
}

module.exports = clone;
