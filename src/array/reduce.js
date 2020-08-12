exports.keysToObject = (keys, value) =>
  Object.keys(keys).reduce((object, key) => {
    object[keys[key]] = value(keys[key] || key);
    return object;
  }, {});

exports.mergeObjects = (arr) =>
  arr.flat().reduce((r, c) => Object.assign(r, c), {});

exports.propCounter = (arr, prop) =>
  arr.reduce(
    (obj, item) => ({ ...obj, [item[prop]]: (obj[item[prop]] || 0) + 1 }),
    {}
  );
