const { isDate } = require("./validate");
const tryCallback = require("./tryCallback");

const mysql_timestamp = (timestamp, callback) =>
  tryCallback(() => {
    timestamp = isDate(timestamp) ? new Date(timestamp) : new Date();

    const mysqlTimestamp = timestamp
      .toISOString()
      .replace("T", " ")
      .replace("Z", "");

    return mysqlTimestamp;
  }, callback);

module.exports = mysql_timestamp;
