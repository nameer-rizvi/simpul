"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const safe_regex_1 = __importDefault(require("safe-regex"));
const jwt_1 = __importDefault(require("./jwt"));
// STRING (REQUIRED BY OTHER VALIDATIONS)
function isString(test) {
    return typeof test === "string";
}
function isStringValid(test) {
    return isString(test) && test.trim().length > 0;
}
// ARRAY
const isArray = Array.isArray;
function isArrayValid(test) {
    return isArray(test) && test.length > 0;
}
function isStringOrArray(test) {
    return isString(test) || isArray(test);
}
// BASE64
function isBase64(test) {
    return (isStringValid(test) &&
        test.length % 4 === 0 &&
        (0, safe_regex_1.default)(test) &&
        !/[^A-Z0-9+/=]/i.test(test));
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
// CREDIT CARD NUMBER
function isCreditCardNumber(test) {
    const cardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|7[0-9]{15})$/;
    return isString(test) && cardPattern.test(test);
}
// DATE
function isDate(test) {
    if (test instanceof Date) {
        return !isNaN(test.getTime());
    }
    else if (typeof test === "string" || typeof test === "number") {
        return !isNaN(new Date(test).getTime());
    }
    else
        return false;
}
// EMAIL
function isEmail(test) {
    return isString(test) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(test);
}
// FUNCTION
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction(test) {
    return typeof test === "function";
}
// HTTP
function isHTTP(test) {
    return isString(test) && /^https?:\/\//.test(test);
}
// JSON
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
// JWT
function isJWT(test) {
    return isStringValid(jwt_1.default.decode(test));
}
// MODULE
function isModule(test) {
    if (!isString(test))
        return false;
    try {
        require.resolve(test);
        return true;
    }
    catch (_a) {
        return false;
    }
}
// NUMBER
function isNumber(test) {
    if (isStringValid(test))
        return !isNaN(Number(test));
    return typeof test === "number" && !isNaN(test) && isFinite(test);
}
// OBJECT
function isObject(test) {
    return (test !== null && typeof test === "object" && test.constructor === Object);
}
function isObjectValid(test) {
    return isObject(test) && Object.keys(test).length > 0;
}
// PHONE NUMBER
function isPhoneNumber(test) {
    return isString(test) && /^\+?[1-9]\d{1,14}$/.test(test); // E.164 format
}
// REGEX
function isRegex(test) {
    return test instanceof RegExp;
}
// URL
function isURL(test) {
    const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/;
    return isString(test) && urlPattern.test(test);
}
// VALUE
function isValid(test, testAll = false) {
    if (test === undefined || test === null)
        return false;
    if (testAll) {
        if (isString(test)) {
            return isStringValid(test);
        }
        else if (isObject(test)) {
            return isObjectValid(test);
        }
        else if (isArray(test)) {
            return isArrayValid(test);
        }
    }
    return true;
}
// EXPORT
exports.default = {
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
