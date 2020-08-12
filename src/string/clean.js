const { isStringValid } = require("../misc/validations");
const capitalize = require("./capitalize");
const safe = require("safe-regex");

module.exports = (string) => {
  string = isStringValid(string)
    ? safe(string)
      ? string.replace(/\s+/g, " ").trim()
      : string.trim()
    : string;
  string &&
    [
      { mark: "," },
      { mark: ".", capitalizeString: true },
      { mark: "?", capitalizeString: true },
      { mark: "!", capitalizeString: true },
    ].forEach((punctuationConfig) => {
      string = string
        .split(punctuationConfig.mark)
        .map((splitString) =>
          punctuationConfig.capitalizeString
            ? capitalize(splitString.trim())
            : splitString.trim()
        )
        .join(punctuationConfig.mark + " ");
    });
  return string;
};
