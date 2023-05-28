const safe = require("safe-regex");
const jwt = require("./jwt");

// STRING (REQUIRED BY OTHER VALIDATIONS)

function isString(test) {
  return typeof test === "string";
}

function isStringValid(test) {
  return isString(test) && Boolean(test.trim().length);
}

// ARRAY

function isArray(test) {
  return Array.isArray(test);
}

function isArrayValid(test) {
  return isArray(test) && Boolean(test.length);
}

function isStringOrArray(test) {
  return isString(test) || isArray(test);
}

// BASE64

function isBase64(test) {
  return (
    isStringValid(test) &&
    test.length % 4 === 0 &&
    safe(test) &&
    !/[^A-Z0-9+/=]/i.test(test)
  );
}

// BOOLEAN

function isBoolean(test) {
  return typeof test === "boolean";
}

function isBooleanString(test) {
  return test === "true" || test === "false";
}

function isBooleanNumber(test) {
  return test === 0 || test === 1;
}

function isBooleanAny(test) {
  return isBoolean(test) || isBooleanString(test) || isBooleanNumber(test);
}

// DATE

function isDate(test) {
  if (isStringValid(test)) {
    return new Date(test).toString() !== "Invalid Date";
  } else return test instanceof Date && !isNaN(test);
}

// FUNCTION

function isFunction(test) {
  return test instanceof Function;
}

// HTTP

function isHTTP(test) {
  const http = "http://";
  const https = "https://";
  return isString(test) && (test.startsWith(http) || test.startsWith(https));
}

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

function isJWT(test) {
  return isStringValid(jwt.decode(test));
}

// NUMBER

function isNumber(test) {
  if (isStringValid(test)) {
    return !isNaN(test);
  } else return typeof test === "number" && !isNaN(test);
}

// OBJECT

function isObject(test) {
  return Boolean(test?.constructor === Object);
}

function isObjectValid(test) {
  return isObject(test) && Boolean(Object.keys(test).length);
}

// REGEX

function isRegex(test) {
  return test instanceof RegExp;
}

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

module.exports = {
  isString,
  isStringValid,
  isArray,
  isArrayValid,
  isStringOrArray,
  isBase64,
  isBoolean,
  isBooleanString,
  isBooleanNumber,
  isBooleanAny,
  isDate,
  isFunction,
  isHTTP,
  isJSON,
  isJSONString,
  isJWT,
  isNumber,
  isObject,
  isObjectValid,
  isRegex,
  isValid,
};
