const validate = require("./validate");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function weekday(date) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  return weekdays[date.getDay()];
}

function month(date) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  return months[date.getMonth()];
}

function withaddeddays(add = 0, date, constant) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  date.setDate(date.getDate() + add);
  return constant === "STRING" ? date.toLocaleDateString() : date;
}

function withaddedseconds(add = 0, date, constant) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  date.setSeconds(date.getSeconds() + add);
  return constant === "STRING" ? date.toLocaleDateString() : date;
}

function daystill(date) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  const today = new Date();
  const day = 1000 * 60 * 60 * 24;
  return Math.round(Math.abs((today - new Date(date)) / day));
}

function isday(date, option = {}) {
  if (!validate.isDate(date)) return false;
  date = new Date(date);
  const { addYears = 0, addMonths = 0, addDays = 0 } = option;
  const newDate = new Date();
  const isYear = date.getFullYear() === newDate.getFullYear() + addYears;
  const isMonth = date.getMonth() === newDate.getMonth() + addMonths;
  const isDay = date.getDate() === newDate.getDate() + addDays;
  return isYear && isMonth && isDay;
}

function isfuture(date) {
  if (!validate.isDate(date)) return false;
  const test = new Date(date).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  return test >= today;
}

function mostrecentworkdate(date, method) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  const day = date.getDay();
  const daysAgo = day === 6 ? -1 : day === 0 ? -2 : 0;
  return withaddeddays(daysAgo, date, method);
}

function mysql(date) {
  date = validate.isDate(date) ? new Date(date) : new Date();
  const mysqldate = date.toISOString().replace("T", " ").replace("Z", "");
  return mysqldate;
}

module.exports = {
  weekdays,
  months,
  weekday,
  month,
  withaddeddays,
  withaddedseconds,
  daystill,
  isday,
  isfuture,
  mostrecentworkdate,
  mysql,
  validate: validate.isDate,
};
