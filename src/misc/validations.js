const safe = require("safe-regex");

module.exports = {
  isArray: (test) => Boolean(test && test.constructor === Array),
  isArrayValid: (test) => Boolean(module.exports.isArray(test) && test.length),
  isBase64: (test) =>
    Boolean(
      module.exports.isString(test) &&
        test.length % 4 === 0 &&
        safe(test) &&
        !/[^A-Z0-9+\/=]/i.test(test)
    ),
  isBoolean: (test) =>
    Boolean(test === false || (test && test.constructor === Boolean)),
  isDate: (test) =>
    Boolean(
      (module.exports.isString(test) &&
        new Date(test).toString() !== "Invalid Date") ||
        (test && test.constructor === Date)
    ),
  isFunction: (test) => Boolean(test && test.constructor === Function),
  isJSON: (test) =>
    Boolean(test && module.exports.isStringValid(JSON.stringify(test))),
  isJSONString: (test) => {
    try {
      JSON.parse(test);
      return true;
    } catch (e) {
      return false;
    }
  },
  isNumber: (test) =>
    test === 0 ||
    (test && test.constructor === Number) ||
    (module.exports.isString(test) && !isNaN(test)),
  isObject: (test) => Boolean(test && test.constructor === Object),
  isObjectValid: (test) =>
    Boolean(module.exports.isObject(test) && Object.keys(test).length),
  isRegex: (test) => Boolean(test && test.constructor === RegExp),
  isString: (test) => Boolean(test && test.constructor === String),
  isStringValid: (test) =>
    Boolean(module.exports.isString(test) && test.trim()),
  //
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
