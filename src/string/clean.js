const space = require("./space");
const capitalize = require("./capitalize");

module.exports = (string) => {
  string = space.clean(string);
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
