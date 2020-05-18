module.exports = {
  isBoolean: (test) => (test || test === false) && test.constructor === Boolean,
  isNumber: (test) => (test || test === 0) && test.constructor === Number,
  isArray: (test) => test && test.constructor === Array,
  isString: (test) => test && test.constructor === String,
  isObject: (test) => test && test.constructor === Object,
  isArrayEmpty: (test) => !module.exports.isArray(test) || !test.length,
  isStringValid: (test) => module.exports.isString(test) && test.trim(),
  isObjectEmpty: (test) =>
    !module.exports.isObject(test) || !Object.keys(test).length,
  areArrayValuesAllStrings: (test) =>
    !module.exports.isArrayEmpty(test) &&
    test.every((value) => module.exports.isString(value)),
  areObjectValuesAllStrings: (test) =>
    !module.exports.isObjectEmpty(test) &&
    Object.keys(test).every((key) => module.exports.isString(test[key])),
  areObjectValuesAllObjects: (test) =>
    !module.exports.isObjectEmpty(test) &&
    Object.keys(test).every((key) => module.exports.isObject(test[key])),
};
