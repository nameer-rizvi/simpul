const validate = require("./validate");

function mysql_timestamp(timestamp) {
  timestamp = validate.isDate(timestamp) ? new Date(timestamp) : new Date();

  const mysqlTimestamp = timestamp
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");

  return mysqlTimestamp;
}

module.exports = mysql_timestamp;
