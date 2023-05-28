const validate = require("./validate");
const datestring = require("./datestring");

function timenvlog(log, option = {}) {
  if (!validate.isString(log)) log = log?.toString?.() || "";

  let datetime, environment;

  if (!option.ignoreTimestamp)
    datetime = datestring(option.date, option.date_format, option.date_option);

  if (!option.ignoreEnvironment)
    environment = (
      process.env.NODE_ENV ||
      process.env.ENV ||
      process.env.NODE_ENVIRONMENT ||
      process.env.ENVIRONMENT
    )?.toUpperCase();

  const timeenv = [datetime, environment].filter(Boolean).join(" @ ");

  if (timeenv && log) {
    console.log(`[${timeenv}] ${log}`);
  } else if (log) console.log(log);
}

module.exports = timenvlog;
