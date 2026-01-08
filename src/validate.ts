import jwt from "./jwt";
import safe from "safe-regex";

/*
 * Array Validations
 */

const isArray = Array.isArray;

function isArrayNonEmpty(test: unknown): test is unknown[] {
  return isArray(test) && test.length > 0;
}

function isArrayOrString(test: unknown): test is unknown[] | string {
  return isArray(test) || isString(test);
}

/*
 * Base64 Validation
 */

function isBase64(test: unknown): test is string {
  if (!isString(test)) return false;
  const b64 = test.replace(/\s+/g, "");
  if (!b64.length) return true;
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(b64)) return false;
  if (b64.includes("=") && !b64.endsWith("=") && !b64.endsWith("=="))
    return false;
  try {
    if (isEnvWindow) {
      decodeURIComponent(atob(b64));
    } else {
      Buffer.from(b64, "base64").toString("utf-8");
    }
    return true;
  } catch {
    return false;
  }
}

/*
 * Boolean Validations
 */

function isBoolean(test: unknown): test is boolean {
  return typeof test === "boolean";
}

function isBooleanAny(
  test: unknown,
): test is boolean | 0 | 1 | "true" | "false" {
  return isBoolean(test) || isBooleanNumber(test) || isBooleanString(test);
}

function isBooleanNumber(test: unknown): test is 0 | 1 {
  return test === 0 || test === 1;
}

function isBooleanString(test: unknown): test is "true" | "false" {
  return test === "true" || test === "false";
}

/*
 * Credit Card Number Validation (Luhn)
 */

function isCreditCardNumber(test: unknown): test is string {
  if (!isStringSafe(test)) return false;
  const digits = test.replace(/\D/g, "");
  if (digits.length < 13 || digits.length > 19) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits.charCodeAt(i) - 48;
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

/*
 * Date Validation
 */

function isDate(test: unknown): test is Date | string | number {
  if (test instanceof Date) {
    return !Number.isNaN(test.getTime());
  } else if (isString(test) || isNumber(test)) {
    return !Number.isNaN(new Date(test).getTime());
  } else return false;
}

/*
 * Email Validation
 */

function isEmail(test: unknown): test is string {
  if (!isStringSafe(test)) return false;
  const email = test.trim();
  const match = email.match(/^([^@]+)@([^@]+)$/);
  if (!match) return false;
  const [, local, domain] = match;
  if (local.length > 64 || domain.length > 253) return false;
  return domain.includes(".");
}

/*
 * Environment Validations: Core Globals
 */

const isEnvWindow = typeof window !== "undefined";

const isEnvDocument = typeof document !== "undefined";

const isEnvBrowser = isEnvWindow && isEnvDocument;

const isEnvNode =
  typeof process !== "undefined" && typeof process.versions?.node === "string";

const isEnvWorker =
  typeof self !== "undefined" &&
  typeof (self as any).importScripts === "function";

/*
 * Environment Validations: NODE_ENV
 */

const nodeEnv = isEnvNode ? process.env.NODE_ENV : undefined;

const isEnvDevelopment = nodeEnv === "development" || nodeEnv === "dev";

const isEnvProduction = nodeEnv === "production" || nodeEnv === "prod";

const isEnvStaging = nodeEnv === "staging" || nodeEnv === "stage";

const isEnvTest = nodeEnv === "test";

/*
 * Environment Validations: Browser-Specific
 */

function isEnvWindowProperty(name: string): boolean {
  return isEnvWindow && name in window;
}

const isEnvLocalhost =
  isEnvWindowProperty("location") &&
  /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

const isEnvServiceWorker =
  isEnvWindowProperty("navigator") && !!window.navigator.serviceWorker;

const isEnvNotificationGranted =
  isEnvWindowProperty("Notification") &&
  window.Notification.permission === "granted";

/*
 * Error Validation
 */

function isError(test: unknown): test is Error {
  return (
    test instanceof Error ||
    Object.prototype.toString.call(test) === "[object Error]"
  );
}

/*
 * Function Validation
 */

function isFunction(test: unknown): test is (...args: any[]) => any {
  return typeof test === "function";
}

/*
 * HTTP Validation
 */

function isHTTP(test: unknown): test is string {
  return isStringSafe(test) && /^https?:\/\//i.test(test);
}

/*
 * JSON Validation
 */

function isJSON(test: unknown): test is any {
  try {
    JSON.parse(JSON.stringify(test));
    return true;
  } catch {
    return false;
  }
}

function isJSONString(test: unknown): test is string {
  try {
    JSON.parse(test as string);
    return true;
  } catch {
    return false;
  }
}

/*
 * JWT Validation
 */

function isJWT(test: unknown): test is string {
  return jwt.decode(test as string) !== undefined;
}

/*
 * Module Validation
 */

function isModule(test: unknown): test is string {
  try {
    require.resolve(test as string);
    return true;
  } catch {
    return false;
  }
}

/*
 * Number Validations
 */

function isNumber(test: unknown): test is number {
  return typeof test === "number";
}

function isNumberString(test: unknown): test is string {
  return isString(test) && isNumberValid(Number(test));
}

function isNumberValid(test: unknown): test is number {
  return isNumber(test) && !Number.isNaN(test) && Number.isFinite(test);
}

function isNumeric(test: unknown): test is string | number {
  return isNumberString(test) || isNumberValid(test);
}

/*
 * Object Validations
 */

function isObject(test: unknown): test is Record<string, unknown> {
  return (
    !!test &&
    typeof test === "object" &&
    (test.constructor === Object || Object.getPrototypeOf(test) === null)
  );
}

function isObjectNonEmpty(test: unknown): test is Record<string, unknown> {
  return isObject(test) && Object.keys(test).length > 0;
}

/*
 * Phone Number Validation
 */

function isPhoneNumber(test: unknown): test is string {
  return isStringSafe(test) && /^\+?[1-9]\d{1,14}$/.test(test); // E.164 format
}

/*
 * Regex Validation
 */

function isRegex(test: unknown): test is RegExp {
  return test instanceof RegExp;
}

/*
 * String Validations
 */

function isString(test: unknown): test is string {
  return typeof test === "string";
}

function isStringNonEmpty(test: unknown): test is string {
  return isString(test) && test.trim().length > 0;
}

function isStringSafe(test: unknown): test is string {
  return isString(test) && safe(test);
}

/*
 * URL Validation
 */

const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/i;

function isURL(test: unknown): test is string {
  return isStringSafe(test) && urlPattern.test(test.trim());
}

/*
 * General Validation
 */

function isValid(test: unknown, testAll = false): boolean {
  if (test === undefined || test === null) {
    return false;
  } else if (testAll && isString(test)) {
    return isStringNonEmpty(test);
  } else if (testAll && isNumber(test)) {
    return !isNumberValid(test);
  } else if (testAll && isObject(test)) {
    return isObjectNonEmpty(test);
  } else if (testAll && isArray(test)) {
    return isArrayNonEmpty(test);
  } else {
    return true;
  }
}

/*
 * Module Default Export
 */

export default {
  isArray,
  isArrayNonEmpty,
  isArrayOrString,
  isBase64,
  isBoolean,
  isBooleanAny,
  isBooleanNumber,
  isBooleanString,
  isCreditCardNumber,
  isDate,
  isEmail,
  isEnvBrowser,
  isEnvDevelopment,
  isEnvDocument,
  isEnvLive: isEnvProduction || isEnvStaging,
  isEnvLocalhost,
  isEnvNode,
  isEnvNotificationGranted,
  isEnvProduction,
  isEnvServiceWorker,
  isEnvStaging,
  isEnvTest,
  isEnvWindow,
  isEnvWindowProperty,
  isEnvWorker,
  isError,
  isFunction,
  isHTTP,
  isJSON,
  isJSONString,
  isJWT,
  isModule,
  isNumber,
  isNumberString,
  isNumberValid,
  isNumeric,
  isObject,
  isObjectNonEmpty,
  isPhoneNumber,
  isRegex,
  isString,
  isStringNonEmpty,
  isStringOrArray: isArrayOrString,
  isStringSafe,
  isURL,
  isValid,
};
