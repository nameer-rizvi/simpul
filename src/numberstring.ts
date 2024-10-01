import validate from "./validate";
import math from "./math";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function numberstring(
  number: number,
  types: string[] = [],
): string | undefined {
  if (validate.isNumber(number)) {
    let string = math.num(number)?.toLocaleString();

    if (!validate.isString(string)) return;

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

    if (types.includes(".-")) {
      string = string.split(".")[0];
    } else if (types.includes(".+")) {
      if (!string.includes(".")) string += ".00";
    }

    return string;
  }
}

export default numberstring;
