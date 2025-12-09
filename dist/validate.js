"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = __importDefault(require("./support"));
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
    if (!isStringValid(test))
        return false;
    try {
        if (support_1.default.window) {
            decodeURIComponent(atob(test));
        }
        else {
            Buffer.from(test, "base64").toString("utf-8");
        }
        return true;
    }
    catch (_a) {
        return false;
    }
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
const creditCardPattern = /^(?:4\d{12}(?:\d{3})?|5[1-5]\d{14}|6(?:011|5\d{2})\d{12}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|7\d{15})$/;
function isCreditCardNumber(test) {
    return isString(test) && (0, safe_regex_1.default)(test) && creditCardPattern.test(test);
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
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isEmail(test) {
    return isString(test) && (0, safe_regex_1.default)(test) && emailPattern.test(test);
}
// ERROR
function isError(test) {
    return (test instanceof Error ||
        Object.prototype.toString.call(test) === "[object Error]");
}
// FUNCTION
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction(test) {
    return typeof test === "function";
}
// HTTP
function isHTTP(test) {
    return isString(test) && (0, safe_regex_1.default)(test) && /^https?:\/\//.test(test);
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
    return isString(test) && (0, safe_regex_1.default)(test) && /^\+?[1-9]\d{1,14}$/.test(test); // E.164 format
}
// REGEX
function isRegex(test) {
    return test instanceof RegExp;
}
// URL
function isURL(test) {
    const urlPattern = /^(https?:\/\/)?([^\s.]+\.[^\s]{2,}|localhost[:\d]*)\S*$/;
    return isString(test) && (0, safe_regex_1.default)(test) && urlPattern.test(test);
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
