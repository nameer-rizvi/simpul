module.exports = (keys, value) =>
  Object.keys(keys).reduce((object, key) => {
    object[keys[key]] = value(keys[key] || key);
    return object;
  }, {});
