import support from "./support";
import safe from "safe-regex";
import jwt from "./jwt";

// STRING (REQUIRED BY OTHER VALIDATIONS)

function isString(test: unknown): test is string {
  return typeof test === "string";
}

function isStringValid(test: unknown): test is string {
  return isString(test) && test.trim().length > 0;
}

// ARRAY

const isArray = Array.isArray;

function isArrayValid(test: unknown): test is unknown[] {
  return isArray(test) && test.length > 0;
}

function isStringOrArray(test: unknown): test is string | unknown[] {
  return isString(test) || isArray(test);
}

// BASE64

function isBase64(test: string): boolean {
  if (!isStringValid(test)) return false;
  try {
    if (support.window) {
      decodeURIComponent(atob(test));
    } else {
      Buffer.from(test, "base64").toString("utf-8");
    }
    return true;
  } catch {
    return false;
  }
}

// BOOLEAN

function isBoolean(test: unknown): test is boolean {
  return typeof test === "boolean";
}

function isBooleanString(test: unknown): test is "true" | "false" {
  return test === "true" || test === "false";
}

function isBooleanNumber(test: unknown): test is 0 | 1 {
  return test === 0 || test === 1;
}

function isBooleanAny(test: unknown): boolean {
  return isBoolean(test) || isBooleanString(test) || isBooleanNumber(test);
}

// CREDIT CARD NUMBER

const creditCardPattern =
  /^(?:4\d{12}(?:\d{3})?|5[1-5]\d{14}|6(?:011|5\d{2})\d{12}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|7\d{15})$/;

function isCreditCardNumber(test: unknown): boolean {
  return isString(test) && safe(test) && creditCardPattern.test(test);
}

// DATE

function isDate(test: unknown): boolean {
  if (test instanceof Date) {
    return !isNaN(test.getTime());
  } else if (typeof test === "string" || typeof test === "number") {
    return !isNaN(new Date(test).getTime());
  } else return false;
}

// EMAIL

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmail(test: unknown): boolean {
  return isString(test) && safe(test) && emailPattern.test(test);
}

// ERROR

function isError(test: unknown): boolean {
  return (
    !!test &&
    (test instanceof Error ||
      Object.prototype.toString.call(test) === "[object Error]")
  );
}

// FUNCTION

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction(test: unknown): test is Function {
  return typeof test === "function";
}

// HTTP

function isHTTP(test: unknown): boolean {
  return isString(test) && safe(test) && /^https?:\/\//.test(test);
}

// JSON

function isJSON(test: unknown): boolean {
  try {
    JSON.parse(JSON.stringify(test));
    return true;
  } catch {
    return false;
  }
}

function isJSONString(test: unknown): boolean {
  try {
    JSON.parse(test as string);
    return true;
  } catch {
    return false;
  }
}

// JWT

function isJWT(test: unknown): boolean {
  return isStringValid(jwt.decode(test as string));
}

// MODULE

function isModule(test: unknown): boolean {
  try {
    require.resolve(test as string);
    return true;
  } catch {
    return false;
  }
}

// NUMBER

function isNumber(test: unknown): boolean {
  if (isStringValid(test)) return !isNaN(Number(test));
  return typeof test === "number" && !isNaN(test) && isFinite(test);
}

// OBJECT

function isObject(test: unknown): test is object {
  return !!test && typeof test === "object" && test.constructor === Object;
}

function isObjectValid(test: unknown): boolean {
  return isObject(test) && Object.keys(test).length > 0;
}

// PHONE NUMBER

function isPhoneNumber(test: unknown): boolean {
  return isString(test) && safe(test) && /^\+?[1-9]\d{1,14}$/.test(test); // E.164 format
}

// REGEX

function isRegex(test: unknown): test is RegExp {
  return test instanceof RegExp;
}

// URL

const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/;

function isURL(test: unknown): boolean {
  return isString(test) && safe(test) && urlPattern.test(test);
}

// VALUE

function isValid(test: unknown, testAll: boolean = false): boolean {
  if (test === undefined || test === null) return false;
  if (testAll) {
    if (isString(test)) {
      return isStringValid(test);
    } else if (isObject(test)) {
      return isObjectValid(test);
    } else if (isArray(test)) {
      return isArrayValid(test);
    }
  }
  return true;
}

// EXPORT

export default {
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
  isCreditCardNumber,
  isDate,
  isEmail,
  isError,
  isFunction,
  isHTTP,
  isJSON,
  isJSONString,
  isJWT,
  isModule,
  isNumber,
  isObject,
  isObjectValid,
  isPhoneNumber,
  isRegex,
  isURL,
  isValid,
};
