const { isArray, isObject } = require("./validate");

function propertyRecursion(json, handler, level = 0, name) {
  if (isArray(json)) {
    for (let i = 0; i < json.length; i++)
      json[i] = propertyRecursion(json[i], handler, level + 1, i);
    return json;
  } else if (isObject(json)) {
    for (let key in json)
      json[key] = propertyRecursion(json[key], handler, level + 1, key);
    return json;
  } else return handler(json, name, level);
}

module.exports = propertyRecursion;
