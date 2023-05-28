const validate = require("./validate");

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

function numberstring(number, types = []) {
  if (validate.isNumber(number)) {
    let string = types.includes("$")
      ? currency.format(number)
      : number.toLocaleString({ maximumFractionDigits: 2 });

    if (types.includes("+")) if (number > 0) string = "+" + string;

    if (types.includes("%")) string += "%";

    if (types.includes("x")) string += "x";

    return string;
  }
}

module.exports = numberstring;
