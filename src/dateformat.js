const { isDate, isNumber } = require("./validations");

function dateformat(date, format, options = {}) {
  date = isDate(date) ? new Date(date) : new Date();

  const { excludeZero, military } = options;

  const withZero = (num, ignore) =>
    (ignore || !excludeZero) && num < 10 ? "0" + num : num;

  const resolver = {
    M: withZero(date.getMonth() + 1),
    D: withZero(date.getDate()),
    Y: date.getFullYear(),
    h: withZero(military ? date.getHours() : date.getHours() % 12 || "12"),
    m: withZero(date.getMinutes(), "ignore"),
    s: withZero(date.getSeconds(), "ignore"),
    p: date.getHours() > 11 ? "PM" : "AM",
  };

  const { M, D, Y, h, m, s, p } = resolver;

  const timestamp = format
    ? format
        .split("")
        .map((i) => (isNumber(resolver[i]) ? resolver[i] : i))
        .join("")
    : `${M}/${D}/${Y} ${h}:${m}:${s} ${p}`;

  return timestamp;
}

module.exports = dateformat;
