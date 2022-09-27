const tryCallback = require("./tryCallback");
const { isDate } = require("./validate");

const dateformat = (date, format, option = {}, callback) =>
  tryCallback(() => {
    date = isDate(date) ? new Date(date) : new Date();

    const { excludeZero, military } = option;

    const withZero = (num, force) =>
      num === 0 ? "00" : (force || !excludeZero) && num < 10 ? "0" + num : num;

    const resolver = {
      M: withZero(date.getMonth() + 1),
      D: withZero(date.getDate()),
      Y: date.getFullYear(),
      h: withZero(military ? date.getHours() : date.getHours() % 12 || 12),
      m: withZero(date.getMinutes(), "force"),
      s: withZero(date.getSeconds(), "force"),
      p: date.getHours() > 11 ? "PM" : "AM",
    };

    if (!format) format = "M/D/Y h:m:s p";

    const timestamp = format
      .split("")
      .map((i) => (Object.keys(resolver).includes(i) ? resolver[i] : i))
      .join("");

    return timestamp;
  }, callback);

module.exports = dateformat;
