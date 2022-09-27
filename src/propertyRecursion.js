const { isArray, isObject } = require("./validate");

function propertyRecursion(json, callback, depth = 0, path = []) {
  const makePath = (curr) => [
    curr.toString(),
    path?.[1] ? `${path[1]}.${curr}` : curr.toString(),
  ];
  if (isArray(json)) {
    for (let i = 0; i < json.length; i++)
      json[i] = propertyRecursion(json[i], callback, depth + 1, makePath(i));
    return json;
  } else if (isObject(json)) {
    for (let key in json) {
      let path2 = makePath(key);
      json[key] = propertyRecursion(json[key], callback, depth + 1, path2);
    }
    return json;
  } else return callback(json, path, depth);
}

module.exports = propertyRecursion;
