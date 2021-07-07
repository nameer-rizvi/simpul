function mysql_timestamp(timestamp, callback) {
  try {
    timestamp = timestamp === undefined ? new Date() : new Date(timestamp);

    const mysql = new Date(timestamp)
      .toISOString()
      .replace("T", " ")
      .replace("Z", "");

    if (callback) callback(null, mysql);

    return mysql;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

module.exports = mysql_timestamp;
