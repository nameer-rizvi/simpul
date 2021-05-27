const safe = require("safe-regex");

// STRING

const isString = (test) => Boolean(test && test.constructor === String);

const isStringValid = (test) => Boolean(isString(test) && test.trim().length);

// NUMBER

const isNumber = (test) =>
  Boolean(
    test === 0 ||
      (test && test.constructor === Number) ||
      (isString(test) && !isNaN(test))
  );

// BOOLEAN

const isBoolean = (test) =>
  Boolean(test === false || (test && test.constructor === Boolean));

const isBooleanString = (test) => Boolean(test === "true" || test === "false");

// DATE

const isDate = (test) =>
  Boolean(
    (test && test.constructor === Date) ||
      (isString(test) && new Date(test).toString() !== "Invalid Date")
  );

// FUNCTION

const isFunction = (test) => Boolean(test && test.constructor === Function);

// BASE64

const isBase64 = (test) =>
  Boolean(
    isString(test) &&
      test.length % 4 === 0 &&
      safe(test) &&
      !/[^A-Z0-9+/=]/i.test(test)
  );

// REGEX

const isRegex = (test) => Boolean(test && test.constructor === RegExp);

// JSON

function isJSON(test) {
  try {
    test = JSON.stringify(test);
    JSON.parse(test);
    return true;
  } catch {
    return false;
  }
}

function isJSONString(test) {
  try {
    JSON.parse(test);
    return true;
  } catch {
    return false;
  }
}

// OBJECT

const isObject = (test) => Boolean(test && test.constructor === Object);

const isObjectValid = (test) =>
  Boolean(isObject(test) && Object.keys(test).length);

// ARRAY

const isArray = (test) => Boolean(test && test.constructor === Array);

const isArrayValid = (test) => Boolean(isArray(test) && test.length);

// INDEX

const validations = {
  isString,
  isStringValid,
  isNumber,
  isBoolean,
  isBooleanString,
  isDate,
  isFunction,
  isBase64,
  isRegex,
  isJSON,
  isJSONString,
  isObject,
  isObjectValid,
  isArray,
  isArrayValid,
};

module.exports = validations;
