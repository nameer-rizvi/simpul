import validate from "./validate";

interface DatestringOptions {
  military?: boolean;
}

function datestring(
  date: Date | string = "",
  format: string = "M/D/Y h:m:s p",
  option: DatestringOptions = {},
): string {
  const dateObject = validate.isDate(date) ? new Date(date) : new Date();

  const h = option.military
    ? dateObject.getHours()
    : dateObject.getHours() % 12 || 12;

  function zeroify(num: number): string {
    return num < 10 ? "0" + num : String(num);
  }

  function mapper(key: string): string {
    switch (key) {
      case "M":
        return zeroify(dateObject.getMonth() + 1);
      case "D":
        return zeroify(dateObject.getDate());
      case "Y":
        return String(dateObject.getFullYear());
      case "h":
        return zeroify(h);
      case "m":
        return zeroify(dateObject.getMinutes());
      case "s":
        return zeroify(dateObject.getSeconds());
      case "p":
        return dateObject.getHours() >= 12 ? "PM" : "AM";
      default:
        return key;
    }
  }

  return format.split("").map(mapper).join("");
}

export default datestring;
