import validate from "./validate";

function parseCommafiedNumber(string: string): number {
  if (validate.isString(string)) {
    // Remove commas, split by spaces, parse the first part as a float.
    const parsedNumber = parseFloat(string.split(" ")[0].replace(/,/g, ""));
    if (!isNaN(parsedNumber)) return parsedNumber;
  }
  return 0;
}

export default parseCommafiedNumber;
