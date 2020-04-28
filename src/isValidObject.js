module.exports = (object) =>
  object &&
  object.constructor === Object &&
  Boolean(Object.keys(object).length);
