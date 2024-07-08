const validate = require("./validate");

function recursively(json, callback, depth = 0, path = []) {
  if (!validate.isObject(json) && !validate.isArray(json)) {
    const result = { key: path[0], path: path[1], value: json, depth };
    return callback(result) || json;
  }

  function makePath(curr) {
    return [curr.toString(), path[1] ? `${path[1]}.${curr}` : curr.toString()];
  }

  if (validate.isArray(json)) {
    return json.map((item, index) => {
      return recursively(item, callback, depth + 1, makePath(index));
    });
  }

  return Object.keys(json).reduce((acc, key) => {
    acc[key] = recursively(json[key], callback, depth + 1, makePath(key));
    return acc;
  }, {});
}

module.exports = recursively;
