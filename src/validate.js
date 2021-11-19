const safe = require("safe-regex");
const jwt = require("./jwt");

// STRING (REQUIRED BY OTHER VALIDATIONS)

const isString = (test) => typeof test === "string";

const isStringValid = (test) => Boolean(isString(test) && test.trim().length);

// ARRAY

const isArray = (test) => Boolean(test && test.constructor === Array);

const isArrayValid = (test) => Boolean(isArray(test) && test.length);

// BASE64

const isBase64 = (test) =>
  isStringValid(test) &&
  test.length % 4 === 0 &&
  safe(test) &&
  !/[^A-Z0-9+/=]/i.test(test);

// BOOLEAN

const isBoolean = (test) => typeof test === "boolean";

const isBooleanString = (test) => test === "true" || test === "false";

const isBooleanNumber = (test) => test === 0 || test === 1;

// DATE

const isDate = (test) =>
  isStringValid(test)
    ? new Date(test).toString() !== "Invalid Date"
    : Boolean(test && test.constructor === Date);

// FUNCTION

const isFunction = (test) => Boolean(test && test.constructor === Function);

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

// JWT

const isJWT = (test) => isStringValid(test) && Boolean(jwt.decode(test));

// NUMBER

const isNumber = (test) =>
  isStringValid(test) ? !isNaN(test) : typeof test === "number" && !isNaN(test);

// OBJECT

const isObject = (test) => Boolean(test && test.constructor === Object);

const isObjectValid = (test) =>
  Boolean(isObject(test) && Object.keys(test).length);

// REGEX

const isRegex = (test) => Boolean(test && test.constructor === RegExp);

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

const validate = {
  isString,
  isStringValid,
  isArray,
  isArrayValid,
  isBase64,
  isBoolean,
  isBooleanString,
  isBooleanNumber,
  isDate,
  isFunction,
  isJSON,
  isJSONString,
  isJWT,
  isNumber,
  isObject,
  isObjectValid,
  isRegex,
  isValid,
};

module.exports = validate;
