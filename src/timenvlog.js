const { isString } = require("./validate");
const dateformat = require("./dateformat");

function timenvlog(log = "", option = {}) {
  if (!isString(log) && log && log.toString) log = log.toString();

  const environment =
    process.env.NODE_ENV ||
    process.env.ENV ||
    process.env.NODE_ENVIRONMENT ||
    process.env.ENVIRONMENT;

  if (!option.ignoreEnvironment && isString(environment))
    log = `[${environment}] ${log}`;

  if (!option.ignoreTimestamp)
    log = `[${dateformat(
      option.date,
      option.date_format,
      option.date_option
    )}] ${log}`;

  console.log(log);
}

module.exports = timenvlog;
