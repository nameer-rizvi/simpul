const safe = require("safe-regex");

// STRING

const isString = (test) => typeof test === "string";

const isStringValid = (test) => Boolean(isString(test) && test.trim().length);

// NUMBER

const isNumber = (test) =>
  isString(test) ? !isNaN(test) : typeof test === "number";

// BOOLEAN

const isBoolean = (test) => typeof test === "boolean";

const isBooleanString = (test) => test === "true" || test === "false";

const isBooleanNumber = (test) => test === 0 || test === 1;

// DATE

const isDate = (test) =>
  isString(test)
    ? new Date(test).toString() !== "Invalid Date"
    : Boolean(test && test.constructor === Date);

// FUNCTION

const isFunction = (test) => Boolean(test && test.constructor === Function);

// BASE64

const isBase64 = (test) =>
  isString(test) &&
  test.length % 4 === 0 &&
  safe(test) &&
  !/[^A-Z0-9+/=]/i.test(test);

// REGEX

const isRegex = (test) => Boolean(test && test.constructor === RegExp);

// JSON

function isJSON(test) {
  try {
    JSON.parse(JSON.stringify(test));
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

// VALUE

function isValid(test, testAll) {
  let condition = test !== undefined && test !== null;
  if (testAll) {
    if (isString(test)) {
      condition = isStringValid(test);
    } else if (isObject(test)) {
      condition = isObjectValid(test);
    } else if (isArray(test)) {
      condition = isArrayValid(test);
    }
  }
  return condition;
}

// INDEX

const validations = {
  isString,
  isStringValid,
  isNumber,
  isBoolean,
  isBooleanString,
  isBooleanNumber,
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
  isValid,
};

module.exports = validations;
