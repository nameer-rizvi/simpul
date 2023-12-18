const _delimiter = require("./delimiter");
const validate = require("./validate");
const cleanstring = require("./cleanstring");

function delimitersplit(string, delimiter = _delimiter, delimiter2, filter) {
  function stringFilter(s) {
    if (s?.trim().length > 1) {
      return filter ? s.toLowerCase() !== filter.toLowerCase() : true;
    }
  }

  if (validate.isString(string)) {
    let splits = string
      .replace(/<br>|<br \/>|<br\/>|\n/g, delimiter)
      .split(delimiter);

    if (delimiter2) splits = splits.map((s) => s.split(delimiter2)).flat();

    const cleanSet = [...new Set(splits)].map(cleanstring).filter(stringFilter);

    return cleanSet;
  } else return [];
}

module.exports = delimitersplit;
