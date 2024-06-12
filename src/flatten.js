const validate = require("./validate");

function flatten(object = {}, delimiter = "_") {
  const result = {};

  function recurse(obj, currentKey) {
    Object.keys(obj).forEach((key) => {
      const newKey = currentKey ? `${currentKey}${delimiter}${key}` : key;
      if (validate.isObject(obj[key])) {
        recurse(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    });
  }

  recurse(object, "");

  return result;
}

module.exports = flatten;
