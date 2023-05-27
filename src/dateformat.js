const validate = require("./validate");

function dateformat(date, format, option = {}) {
  date = validate.isDate(date) ? new Date(date) : new Date();

  const resolver = {
    M: zeroify(date.getMonth() + 1),
    D: zeroify(date.getDate()),
    Y: date.getFullYear(),
    h: zeroify(option.military ? date.getHours() : date.getHours() % 12 || 12),
    m: zeroify(date.getMinutes()),
    s: zeroify(date.getSeconds()),
    p: date.getHours() > 11 ? "PM" : "AM",
  };

  if (!format) format = "M/D/Y h:m:s p";

  const timestamp = format
    .split("")
    .map((i) => (Object.keys(resolver).includes(i) ? resolver[i] : i))
    .join("");

  return timestamp;
}

module.exports = dateformat;

function zeroify(num) {
  if (num === 0) {
    return "00";
  } else if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
