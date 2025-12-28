import validate from "./validate";

/* ----------------------- Constants / Caches ---------------------- */

type DateType = Date | string | number;

const WEEKDAY_LONG: Record<string, Intl.DateTimeFormat> = {};

const WEEKDAY_SHORT: Record<string, Intl.DateTimeFormat> = {};

const MONTH_LONG: Record<string, Intl.DateTimeFormat> = {};

const MONTH_SHORT: Record<string, Intl.DateTimeFormat> = {};

/* -------------------- Date Arrays / Accessors -------------------- */

function getWeekdays(locale?: string): readonly string[] {
  const fmt = getFormatter(WEEKDAY_LONG, locale, { weekday: "long" });
  return Object.freeze(
    Array.from({ length: 7 }, (_, i) => fmt.format(new Date(1970, 0, 4 + i))),
  );
}

function getWeekdaysShort(locale?: string): readonly string[] {
  const fmt = getFormatter(WEEKDAY_SHORT, locale, { weekday: "short" });
  return Object.freeze(
    Array.from({ length: 7 }, (_, i) => fmt.format(new Date(1970, 0, 4 + i))),
  );
}

function getWeekday(input?: DateType, locale?: string): string {
  return getFormatter(WEEKDAY_LONG, locale, { weekday: "long" }).format(
    resolve(input),
  );
}

function getWeekdayShort(input?: DateType, locale?: string): string {
  return getFormatter(WEEKDAY_SHORT, locale, { weekday: "short" }).format(
    resolve(input),
  );
}

function getMonths(locale?: string): readonly string[] {
  const fmt = getFormatter(MONTH_LONG, locale, { month: "long" });
  return Object.freeze(
    Array.from({ length: 12 }, (_, i) => fmt.format(new Date(1970, i, 1))),
  );
}

function getMonthsShort(locale?: string): readonly string[] {
  const fmt = getFormatter(MONTH_SHORT, locale, { month: "short" });
  return Object.freeze(
    Array.from({ length: 12 }, (_, i) => fmt.format(new Date(1970, i, 1))),
  );
}

function getMonth(input?: DateType, locale?: string): string {
  return getFormatter(MONTH_LONG, locale, { month: "long" }).format(
    resolve(input),
  );
}

function getMonthShort(input?: DateType, locale?: string): string {
  return getFormatter(MONTH_SHORT, locale, { month: "short" }).format(
    resolve(input),
  );
}

/* ----------------------- Date Manipulation ----------------------- */

function addSeconds(
  seconds = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(seconds)) d.setSeconds(d.getSeconds() + seconds);
  return asString ? d.toLocaleString() : d;
}

function addMinutes(
  minutes = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(minutes)) d.setMinutes(d.getMinutes() + minutes);
  return asString ? d.toLocaleString() : d;
}

function addHours(
  hours = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(hours)) d.setHours(d.getHours() + hours);
  return asString ? d.toLocaleString() : d;
}

function addDays(
  days = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(days)) d.setDate(d.getDate() + days);
  return asString ? d.toLocaleString() : d;
}

function addMonths(
  months = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(months)) d.setMonth(d.getMonth() + months);
  return asString ? d.toLocaleString() : d;
}

function addYears(
  years = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(years)) d.setFullYear(d.getFullYear() + years);
  return asString ? d.toLocaleString() : d;
}

function addWorkDays(
  workdays = 0,
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  if (validate.isNumber(workdays)) {
    const direction = workdays < 0 ? -1 : 1;
    let remaining = Math.abs(workdays);
    while (remaining) {
      d.setDate(d.getDate() + direction);
      const day = d.getDay();
      if (day !== 0 && day !== 6) remaining--;
    }
  }
  return asString ? d.toLocaleDateString() : d;
}

function getMostRecentWorkDate(
  input?: DateType,
  asString?: boolean,
): Date | string {
  const d = resolve(input);
  const day = d.getDay();
  const offset = day === 6 ? -1 : day === 0 ? -2 : 0;
  return addDays(offset, d, asString);
}

/* ------------------------ Date Conversions ----------------------- */

function toMysqlDatetime(input?: DateType): string {
  return resolve(input)
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")
    .split(".")[0];
}

/* -------------------- Relative / Friendly Time ------------------- */

function getDaysTill(input1?: DateType, input2?: DateType): number {
  const target = resolve(input1);
  const from = resolve(input2);
  const diff = (target.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);
  return Math.ceil(diff);
}

function getDaysDiff(input1?: DateType, input2?: DateType): number {
  return Math.abs(getDaysTill(input1, input2));
}

function getRelative(
  input?: DateType,
  asShort?: boolean,
  locale?: string,
): string {
  const d = resolve(input);
  const now = new Date();
  const diffMs = d.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  const diffWeek = Math.round(diffDay / 7);
  const diffMonth =
    (d.getFullYear() - now.getFullYear()) * 12 +
    (d.getMonth() - now.getMonth());
  const diffYear = d.getFullYear() - now.getFullYear();
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  if (Math.abs(diffSec) < 15) {
    return "now";
  } else if (Math.abs(diffSec) < 60) {
    return asShort ? `${diffSec}s` : rtf.format(diffSec, "second");
  } else if (Math.abs(diffMin) < 60) {
    return asShort ? `${diffMin}m` : rtf.format(diffMin, "minute");
  } else if (Math.abs(diffHour) < 24) {
    return asShort ? `${diffHour}h` : rtf.format(diffHour, "hour");
  } else if (diffDay === 0) {
    return asShort ? "today" : "today";
  } else if (diffDay === 1) {
    return asShort ? "tomorrow" : "tomorrow";
  } else if (diffDay === -1) {
    return asShort ? "yesterday" : "yesterday";
  } else if (Math.abs(diffDay) < 7) {
    return asShort ? `${diffDay}d` : rtf.format(diffDay, "day");
  } else if (Math.abs(diffWeek) < 5) {
    return asShort ? `${diffWeek}w` : rtf.format(diffWeek, "week");
  } else if (Math.abs(diffMonth) < 12) {
    return asShort ? `${diffMonth}M` : rtf.format(diffMonth, "month");
  } else return asShort ? `${diffYear}y` : rtf.format(diffYear, "year");
}

/* --------------------------- Validators -------------------------- */

function isDay(
  input?: DateType,
  option: {
    date?: DateType;
    addYears?: number;
    addMonths?: number;
    addDays?: number;
  } = {},
): boolean {
  const { date, addYears = 0, addMonths = 0, addDays = 0 } = option;
  const dateA = resolve(input);
  const dateB = resolve(date);
  return (
    dateA.getFullYear() === dateB.getFullYear() + addYears &&
    dateA.getMonth() === dateB.getMonth() + addMonths &&
    dateA.getDate() === dateB.getDate() + addDays
  );
}

function isPast(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1) < resolve(input2);
}

function isPresent(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1) === resolve(input2);
}

function isFuture(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1) > resolve(input2);
}

function isDayPast(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return (
    isMonthPast(d1, d2) ||
    (isMonthPresent(d1, d2) && d1.getDate() < d2.getDate())
  );
}

function isDayPresent(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return isMonthPresent(d1, d2) && d1.getDate() === d2.getDate();
}

function isDayFuture(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return (
    isMonthFuture(d1, d2) ||
    (isMonthPresent(d1, d2) && d1.getDate() > d2.getDate())
  );
}

function isMonthPast(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return (
    isYearPast(d1, d2) ||
    (isYearPresent(d1, d2) && d1.getMonth() < d2.getMonth())
  );
}

function isMonthPresent(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return isYearPresent(d1, d2) && d1.getMonth() === d2.getMonth();
}

function isMonthFuture(input1?: DateType, input2?: DateType): boolean {
  const d1 = resolve(input1);
  const d2 = resolve(input2);
  return (
    isYearFuture(d1, d2) ||
    (isYearPresent(d1, d2) && d1.getMonth() > d2.getMonth())
  );
}

function isYearPast(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1).getFullYear() < resolve(input2).getFullYear();
}

function isYearPresent(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1).getFullYear() === resolve(input2).getFullYear();
}

function isYearFuture(input1?: DateType, input2?: DateType): boolean {
  return resolve(input1).getFullYear() > resolve(input2).getFullYear();
}

function isWeekend(input?: DateType): boolean {
  const day = resolve(input).getDay();
  return day === 0 || day === 6;
}

function isWeekday(input?: DateType): boolean {
  const day = resolve(input).getDay();
  return day >= 1 && day <= 5;
}

function isWeekdayName(input?: string, locale?: string): boolean {
  if (validate.isStringNonEmpty(input)) {
    const v = input.toLowerCase();
    const long = getWeekdays(locale);
    const short = getWeekdaysShort(locale);
    for (let i = 0; i < long.length; i++)
      if (long[i].toLowerCase() === v || short[i].toLowerCase() === v)
        return true;
  }
  return false;
}

function isMonthName(input?: string, locale?: string): boolean {
  if (validate.isStringNonEmpty(input)) {
    const v = input.toLowerCase();
    const long = getMonths(locale);
    const short = getMonthsShort(locale);
    for (let i = 0; i < long.length; i++)
      if (long[i].toLowerCase() === v || short[i].toLowerCase() === v)
        return true;
  }
  return false;
}

/* --------------------- Internals / Utilities --------------------- */

function resolve(input?: DateType): Date {
  return validate.isDate(input) ? new Date(input) : new Date();
}

function getFormatter(
  cache: Record<string, Intl.DateTimeFormat>,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  return (cache[locale] ??= new Intl.DateTimeFormat(locale, options));
}

/* ----------------------------- Export ---------------------------- */

export default {
  // Constants / Caches
  WEEKDAY_LONG,
  WEEKDAY_SHORT,
  MONTH_LONG,
  MONTH_SHORT,
  // Date Arrays / Accessors
  getWeekdays, // returns array of weekday names
  getWeekdaysShort, // returns array of short weekday names
  getWeekday, // get weekday name from date
  getWeekdayShort, // get short weekday name from date
  getMonths, // returns array of month names
  getMonthsShort, // returns array of short month names
  getMonth, // get month name from date
  getMonthShort, // get short month name from date
  // Date Manipulation
  addSeconds, // add/subtract seconds
  addMinutes, // add/subtract minutes
  addHours, // add/subtract hours
  addDays, // add/subtract days
  addMonths, // add/subtract months
  addYears, // add/subtract years
  addWorkDays, // add/subtract workdays (skips weekends)
  getMostRecentWorkDate, // return last workday (skip weekends)
  // Date Conversions
  toMysqlDatetime, // MySQL-friendly datetime (UTC)
  // Relative / Friendly Time
  getDaysTill, // days until target date
  getDaysDiff, // diff in days between dates
  getRelative, // friendly relative time (seconds → years, short/long)
  // // Validators
  isDay, // check if date matches options
  isPast, // check if date is in the past
  isPresent, // check if date is in the present
  isFuture, // check if date is in the future
  isDayPast, // check if date day is in the past
  isDayPresent, // check if date day is in the present
  isDayFuture, // check if date day is in the future
  isMonthPast, // check if date month is in the past
  isMonthPresent, // check if date month is in the present
  isMonthFuture, // check if date month is in the future
  isYearPast, // check if date year is in the past
  isYearPresent, // check if date year is in the present
  isYearFuture, // check if date year is in the future
  isWeekend, // check if date is a weekend
  isWeekday, // check if date is a weekday
  isWeekdayName, // check if string is a weekday
  isMonthName, // check if string is a month
  validate: validate.isDate, // simple date validation
  // Internals / Utilities
  resolve, // internal date resolver
  getFormatter, // internal formatter helper
};
