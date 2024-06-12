const validate = require("./validate");

function datestring(date, format = "M/D/Y h:m:s p", option = {}) {
  date = validate.isDate(date) ? new Date(date) : new Date();

  function zeroify(num) {
    return num < 10 ? "0" + num : num;
  }

  function mapper(key) {
    switch (key) {
      case "M":
        return zeroify(date.getMonth() + 1);
      case "D":
        return zeroify(date.getDate());
      case "Y":
        return date.getFullYear();
      case "h":
        const h = option.military
          ? date.getHours()
          : date.getHours() % 12 || 12;
        return zeroify(h);
      case "m":
        return zeroify(date.getMinutes());
      case "s":
        return zeroify(date.getSeconds());
      case "p":
        return date.getHours() > 11 ? "PM" : "AM";
      default:
        return key;
    }
  }

  return format.split("").map(mapper).join("");
}

module.exports = datestring;
