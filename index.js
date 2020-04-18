const sanitized = require("sanitized");
const logti = require("logti");
const { encode } = require("he");

module.exports = {
  sanitized,
  logti,
  getQueryParam: (param) => {
    const params = new URLSearchParams(window.location.search);
    var value = params.get(param);
    // sanitized() decodes strings, so encode()
    // is required to transform html entities.
    value && (value = sanitized(encode(value)));
    const hash = sanitized(window.location.hash);
    return value ? value : hash ? hash : null;
  },
  stringExists: (str) => str && str.constructor === String && str.trim(),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  camelToSnake: (str) =>
    str
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase(),
  snakeToCamel: (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase()),
  camelCase: (str) =>
    str.constructor === String
      ? str
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
      : str,
  unCamelCase: (str) =>
    str.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
  flattenObject: (obj) =>
    Object.assign(
      {},
      ...(function _flatten(o) {
        return [].concat(
          ...Object.keys(o).map((k) =>
            o[k].constructor === Object ? _flatten(o[k]) : { [k]: o[k] }
          )
        );
      })(obj)
    ),
  length: {
    char: (str) => str && str.trim() && str.trim().length,
    words: (str) => str && str.trim() && str.trim().split(/\s+/).length,
  },
  sortByAlphabet: (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
  sortByDate: (arr, key) =>
    arr.sort((a, b) => new Date(a[key]) - new Date(b[key])),
  reduceKeysToObject: (keys, value) =>
    Object.keys(keys).reduce((object, key) => {
      object[keys[key]] = value(keys[key] || key);
      return object;
    }, {}),
  changeArrayIndex: (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  },
  formattedTimestamp: (timestamp, format) => {
    const date = new Date(timestamp);
    const zeros = (num) => (num < 10 ? `0${num}` : num);
    const resolver = {
      M: zeros(date.getMonth() + 1),
      D: zeros(date.getDate()),
      Y: date.getFullYear(),
      h: zeros(date.getHours() % 12 || "12"),
      m: zeros(date.getMinutes()),
      p: date.getHours() > 11 ? "PM" : "AM",
    };
    const { M, D, Y, h, m, p } = resolver;
    return format
      ? format
          .split("")
          .map((l) => resolver[l] || l)
          .join("")
      : `${M}/${D}/${Y} ${h}:${m} ${p}`;
  },
  clone: (original) => JSON.parse(JSON.stringify(original)),
};
