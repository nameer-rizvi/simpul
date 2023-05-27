const trycallback = require("./trycallback");

function parsejson(json, callback) {
  return trycallback(() => JSON.parse(json), callback);
}

module.exports = parsejson;
