import validate from "./validate";
import datestring from "./datestring";

interface TimenvlogOptions {
  ignoreTimestamp?: boolean;
  ignoreEnvironment?: boolean;
  date?: Date | string;
  date_format?: string;
  date_option?: object;
}

function timenvlog(log: unknown, option: TimenvlogOptions = {}): void {
  let datetime: string | undefined;

  let environment: string | undefined;

  if (!validate.isString(log)) {
    log = log?.toString();
  }

  if (!option.ignoreTimestamp) {
    datetime = datestring(option.date, option.date_format, option.date_option);
  }

  if (!option.ignoreEnvironment) {
    environment = process.env.NODE_ENV?.toUpperCase();
  }

  const timeenv = [datetime, environment].filter(Boolean).join(" @ ");

  if (timeenv && log) {
    console.log(`[${timeenv}] ${log}`);
  } else if (log) {
    console.log(log);
  }
}

export default timenvlog;
