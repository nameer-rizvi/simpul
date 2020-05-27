module.exports = {
  isBoolean: (test) => (test || test === false) && test.constructor === Boolean,
  isNumber: (test) => (test || test === 0) && test.constructor === Number,
  isArray: (test) => test && test.constructor === Array,
  isString: (test) => test && test.constructor === String,
  isObject: (test) => test && test.constructor === Object,
  isArrayValid: (test) => module.exports.isArray(test) && test.length,
  isStringValid: (test) => module.exports.isString(test) && test.trim(),
  isObjectValid: (test) =>
    module.exports.isObject(test) && Object.keys(test).length,
  areArrayValuesAllStrings: (test) =>
    module.exports.isArrayValid(test) &&
    test.every((value) => module.exports.isString(value)),
  areObjectValuesAllStrings: (test) =>
    module.exports.isObjectValid(test) &&
    Object.keys(test).every((key) => module.exports.isString(test[key])),
  areObjectValuesAllObjects: (test) =>
    module.exports.isObjectValid(test) &&
    Object.keys(test).every((key) => module.exports.isObject(test[key])),
};
