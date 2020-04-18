module.exports = {
  stringExists: (str) => str && str.constructor === String && str.trim(),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  camelToSnake: (str) =>
    str
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase(),
  snakeToCamel: (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase()),
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
};
