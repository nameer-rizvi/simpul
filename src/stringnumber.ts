import validate from "./validate";

function stringnumber(string: string): number | undefined {
  if (validate.isString(string)) {
    return Number(string.replace(/[^0-9.-]+/g, ""));
  }
}

export default stringnumber;
