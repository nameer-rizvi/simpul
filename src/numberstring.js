const validate = require("./validate");
const math = require("./math");

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function numberstring(number, types = []) {
  if (validate.isNumber(number)) {
    let string = math.num(number).toLocaleString();

    if (types.includes("$")) {
      string = currency.format(number);
    } else if (types.includes("#")) {
      string = `#${string}`;
    } else if (types.includes("%")) {
      string += "%";
    } else if (types.includes("x")) {
      string += "x";
    }

    if (types.includes("+") && number > 0) {
      string = "+" + string;
    }

    return string;
  }
}

module.exports = numberstring;
