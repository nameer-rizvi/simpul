const { isDate } = require("./validate");
const tryCallback = require("./tryCallback");

function mysql_timestamp(timestamp) {
  if (!isDate(timestamp)) {
    timestamp = new Date();
  } else timestamp = new Date(timestamp);

  const translation = timestamp
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");

  return translation;
}

const mysql_timestampCallback = (timestamp, callback) =>
  tryCallback(() => mysql_timestamp(timestamp), callback);

module.exports = mysql_timestampCallback;
