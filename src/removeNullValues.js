function removeNullValues(object = {}) {
  const keys = Object.keys(object);

  let clean = {};

  for (let i = keys.length - 1; i >= 0; i--) {
    let key = keys[i];
    let value = object[key];
    if (value !== null && value !== undefined) clean[key] = value;
  }

  return clean;
}

module.exports = removeNullValues;
