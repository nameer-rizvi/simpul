const validate = require("./validate");

// Format: "[[position, number, type]]"

function peaks(array) {
  const results = [];

  if (validate.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      let a = array[i];
      let b = array[i + 1];
      let c = array[i + 2];
      if (
        validate.isNumber(a) &&
        validate.isNumber(b) &&
        validate.isNumber(c)
      ) {
        if (Math.abs(a) < Math.abs(b) && Math.abs(b) >= Math.abs(c)) {
          if (b > 0) results.push([i, b, "top"]);
          if (b < 0) results.push([i, b, "bottom"]);
        }
      } else if (validate.isNumber(a) && validate.isNumber(b)) {
        if (Math.abs(a) < Math.abs(b)) {
          if (b > 0) results.push([i, b, "top"]);
          if (b < 0) results.push([i, b, "bottom"]);
        }
      }
    }
  }

  return results;
}

module.exports = peaks;
