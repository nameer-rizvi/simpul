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

function isCreditCardNumber(test: unknown): boolean {
  const cardPattern =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|7[0-9]{15})$/;
  return isString(test) && safe(test) && cardPattern.test(test);
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

function isEmail(test: unknown): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return isString(test) && safe(test) && emailPattern.test(test);
}

// ERROR

function isError(test: unknown): boolean {
  return (
    test instanceof Error ||
    Object.prototype.toString.call(test) === "[object Error]"
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
  if (!isString(test)) return false;
  try {
    require.resolve(test);
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

function isObject(test: unknown): test is Record<string, unknown> {
  return (
    test !== null && typeof test === "object" && test.constructor === Object
  );
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

function isURL(test: unknown): boolean {
  const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/;
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
