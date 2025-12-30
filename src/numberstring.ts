import validate from "./validate";
import math from "./math";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type NumberStringType = "$" | "#" | "%" | "x" | "+" | ".-" | ".+";

function numberstring(
  input: string | number,
  types: readonly NumberStringType[] = [],
): string | undefined {
  if (!validate.isNumeric(input)) return;

  const number = math.num(Number(input))!;

  let output: string;

  if (types.includes("$")) {
    output = currencyFormatter.format(number);
  } else {
    output = number.toLocaleString();
    if (types.includes("#")) output = `#${output}`;
    else if (types.includes("%")) output += "%";
    else if (types.includes("x")) output += "x";
  }

  if (types.includes("+") && number > 0) {
    output = `+${output}`;
  }

  if (types.includes(".-")) {
    const dot = output.indexOf(".");
    if (dot !== -1) output = output.slice(0, dot);
  } else if (types.includes(".+") && !output.includes(".")) {
    output += ".00";
  }

  return output;
}

export default numberstring;
