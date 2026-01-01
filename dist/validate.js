"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("./jwt"));
const safe_regex_1 = __importDefault(require("safe-regex"));
/*
 * Array Validations
 */
const isArray = Array.isArray;
function isArrayNonEmpty(test) {
    return isArray(test) && test.length > 0;
}
function isArrayOrString(test) {
    return isArray(test) || isString(test);
}
/*
 * Base64 Validation
 */
function isBase64(test) {
    if (!isString(test))
        return false;
    const b64 = test.replace(/\s+/g, "");
    if (!b64.length)
        return true;
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))
        return false;
    if (b64.includes("=") && !b64.endsWith("=") && !b64.endsWith("=="))
        return false;
    try {
        if (isEnvWindow) {
            decodeURIComponent(atob(b64));
        }
        else {
            Buffer.from(b64, "base64").toString("utf-8");
        }
        return true;
    }
    catch (_a) {
        return false;
    }
}
/*
 * Boolean Validations
 */
function isBoolean(test) {
    return typeof test === "boolean";
}
function isBooleanAny(test) {
    return isBoolean(test) || isBooleanNumber(test) || isBooleanString(test);
}
function isBooleanNumber(test) {
    return test === 0 || test === 1;
}
function isBooleanString(test) {
    return test === "true" || test === "false";
}
/*
 * Credit Card Number Validation (Luhn)
 */
function isCreditCardNumber(test) {
    if (!isStringSafe(test))
        return false;
    const digits = test.replace(/\D/g, "");
    if (digits.length < 13 || digits.length > 19)
        return false;
    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits.charCodeAt(i) - 48;
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}
/*
 * Date Validation
 */
function isDate(test) {
    if (test instanceof Date) {
        return !Number.isNaN(test.getTime());
    }
    else if (isString(test) || isNumber(test)) {
        return !Number.isNaN(new Date(test).getTime());
    }
    else
        return false;
}
/*
 * Email Validation
 */
function isEmail(test) {
    if (!isStringSafe(test))
        return false;
    const email = test.trim();
    const match = email.match(/^([^@]+)@([^@]+)$/);
    if (!match)
        return false;
    const [, local, domain] = match;
    if (local.length > 64 || domain.length > 253)
        return false;
    return domain.includes(".");
}
/*
 * Environment Validations: Core Globals
 */
const isEnvWindow = typeof window !== "undefined";
const isEnvDocument = typeof document !== "undefined";
const isEnvBrowser = isEnvWindow && isEnvDocument;
const isEnvNode = typeof process !== "undefined" && typeof ((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node) === "string";
const isEnvWorker = typeof self !== "undefined" &&
    typeof self.importScripts === "function";
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
function isEnvWindowProperty(name) {
    return isEnvWindow && name in window;
}
const isEnvLocalhost = isEnvWindowProperty("location") &&
    /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
const isEnvServiceWorker = isEnvWindowProperty("navigator") && !!window.navigator.serviceWorker;
const isEnvNotificationGranted = isEnvWindowProperty("Notification") &&
    window.Notification.permission === "granted";
/*
 * Error Validation
 */
function isError(test) {
    return (test instanceof Error ||
        Object.prototype.toString.call(test) === "[object Error]");
}
/*
 * Function Validation
 */
function isFunction(test) {
    return typeof test === "function";
}
/*
 * HTTP Validation
 */
function isHTTP(test) {
    return isStringSafe(test) && /^https?:\/\//i.test(test);
}
/*
 * JSON Validation
 */
function isJSON(test) {
    try {
        JSON.parse(JSON.stringify(test));
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isJSONString(test) {
    try {
        JSON.parse(test);
        return true;
    }
    catch (_a) {
        return false;
    }
}
/*
 * JWT Validation
 */
function isJWT(test) {
    try {
        jwt_1.default.decode(test);
        return true;
    }
    catch (_a) {
        return false;
    }
}
/*
 * Module Validation
 */
function isModule(test) {
    try {
        require.resolve(test);
        return true;
    }
    catch (_a) {
        return false;
    }
}
/*
 * Number Validations
 */
function isNumber(test) {
    return typeof test === "number";
}
function isNumberString(test) {
    return isString(test) && isNumberValid(Number(test));
}
function isNumberValid(test) {
    return isNumber(test) && !Number.isNaN(test) && Number.isFinite(test);
}
function isNumeric(test) {
    return isNumberString(test) || isNumberValid(test);
}
/*
 * Object Validations
 */
function isObject(test) {
    return (!!test &&
        typeof test === "object" &&
        (test.constructor === Object || Object.getPrototypeOf(test) === null));
}
function isObjectNonEmpty(test) {
    return isObject(test) && Object.keys(test).length > 0;
}
/*
 * Phone Number Validation
 */
function isPhoneNumber(test) {
    return isStringSafe(test) && /^\+?[1-9]\d{1,14}$/.test(test); // E.164 format
}
/*
 * Regex Validation
 */
function isRegex(test) {
    return test instanceof RegExp;
}
/*
 * String Validations
 */
function isString(test) {
    return typeof test === "string";
}
function isStringNonEmpty(test) {
    return isString(test) && test.trim().length > 0;
}
function isStringSafe(test) {
    return isString(test) && (0, safe_regex_1.default)(test);
}
/*
 * URL Validation
 */
const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/i;
function isURL(test) {
    return isStringSafe(test) && urlPattern.test(test.trim());
}
/*
 * General Validation
 */
function isValid(test, testAll = false) {
    if (test === undefined || test === null) {
        return false;
    }
    else if (testAll && isString(test)) {
        return isStringNonEmpty(test);
    }
    else if (testAll && isNumber(test)) {
        return !isNumberValid(test);
    }
    else if (testAll && isObject(test)) {
        return isObjectNonEmpty(test);
    }
    else if (testAll && isArray(test)) {
        return isArrayNonEmpty(test);
    }
    else {
        return true;
    }
}
/*
 * Module Default Export
 */
exports.default = {
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
