const validate = require("./validate");

function recursively(json, callback, depth = 0, path = []) {
  function makePath(curr) {
    const path0 = curr.toString();
    const path1 = path?.[1] ? `${path[1]}.${curr}` : curr.toString();
    return [path0, path1];
  }

  if (validate.isArray(json)) {
    for (let i = 0; i < json.length; i++)
      json[i] = recursively(json[i], callback, depth + 1, makePath(i));
    return json;
  }

  if (validate.isObject(json)) {
    for (let key in json)
      json[key] = recursively(json[key], callback, depth + 1, makePath(key));
    return json;
  }

  return callback({ key: path[0], path: path[1], value: json, depth });
}

module.exports = recursively;
