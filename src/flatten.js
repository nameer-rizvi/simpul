const { isObject } = require("./validations");

function flatten(object) {
  const flattened = {};

  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    let value = object[key];

    if (isObject(value)) {
      Object.assign(flattened, flatten(value));
    } else flattened[key] = object[key];
  }

  return flattened;
}

module.exports = flatten;
