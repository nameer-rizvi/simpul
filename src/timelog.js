const dateformat = require("./dateformat");

function timelog(log = "") {
  if (log && log.toString) log = log.toString();

  if (process.env.NODE_ENV) log = `[${process.env.NODE_ENV}] ${log}`;

  log = `[${dateformat()}] ${log}`;

  console.log(log);
}

module.exports = timelog;
