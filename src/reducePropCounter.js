module.exports = (arr, prop) =>
  arr.reduce(
    (obj, item) => ({ ...obj, [item[prop]]: (obj[item[prop]] || 0) + 1 }),
    {}
  );
