const dateformat = require("./dateformat");

function timelog(log = "", ignoreEnvironment) {
  if (log && log.toString) log = log.toString();

  if (ignoreEnvironment !== true && process.env.NODE_ENV)
    log = `[${process.env.NODE_ENV}] ${log}`;

  log = `[${dateformat()}] ${log}`;

  console.log(log);
}

module.exports = timelog;
