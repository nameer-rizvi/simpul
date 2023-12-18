const validate = require("./validate");

function datestring(date, format, option = {}) {
  date = validate.isDate(date) ? new Date(date) : new Date();

  function mapper(key) {
    if (key === "M") {
      return zeroify(date.getMonth() + 1);
    } else if (key === "D") {
      return zeroify(date.getDate());
    } else if (key === "Y") {
      return date.getFullYear();
    } else if (key === "h") {
      const h = option.military ? date.getHours() : date.getHours() % 12 || 12;
      return zeroify(h);
    } else if (key === "m") {
      return zeroify(date.getMinutes());
    } else if (key === "s") {
      return zeroify(date.getSeconds());
    } else if (key === "p") {
      return date.getHours() > 11 ? "PM" : "AM";
    } else {
      return key;
    }
  }

  if (!format) format = "M/D/Y h:m:s p";

  const timestamp = format.split("").map(mapper).join("");

  return timestamp;
}

function zeroify(num) {
  if (num === 0) {
    return "00";
  } else if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

module.exports = datestring;
