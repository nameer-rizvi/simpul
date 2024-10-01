declare function isString(test: unknown): test is string;
declare function isStringValid(test: unknown): test is string;
declare function isArrayValid(test: unknown): test is unknown[];
declare function isStringOrArray(test: unknown): test is string | unknown[];
declare function isBase64(test: unknown): boolean;
declare function isBoolean(test: unknown): test is boolean;
declare function isBooleanString(test: unknown): test is "true" | "false";
declare function isBooleanNumber(test: unknown): test is 0 | 1;
declare function isBooleanAny(test: unknown): boolean;
declare function isCreditCardNumber(test: unknown): boolean;
declare function isDate(test: unknown): boolean;
declare function isEmail(test: unknown): boolean;
declare function isFunction(test: unknown): test is Function;
declare function isHTTP(test: unknown): boolean;
declare function isJSON(test: unknown): boolean;
declare function isJSONString(test: unknown): boolean;
declare function isJWT(test: unknown): boolean;
declare function isModule(test: unknown): boolean;
declare function isNumber(test: unknown): boolean;
declare function isObject(test: unknown): test is Record<string, unknown>;
declare function isObjectValid(test: unknown): boolean;
declare function isPhoneNumber(test: unknown): boolean;
declare function isRegex(test: unknown): test is RegExp;
declare function isURL(test: unknown): boolean;
declare function isValid(test: unknown, testAll?: boolean): boolean;
declare const _default: {
    isString: typeof isString;
    isStringValid: typeof isStringValid;
    isArray: (arg: any) => arg is any[];
    isArrayValid: typeof isArrayValid;
    isStringOrArray: typeof isStringOrArray;
    isBase64: typeof isBase64;
    isBoolean: typeof isBoolean;
    isBooleanString: typeof isBooleanString;
    isBooleanNumber: typeof isBooleanNumber;
    isBooleanAny: typeof isBooleanAny;
    isCreditCardNumber: typeof isCreditCardNumber;
    isDate: typeof isDate;
    isEmail: typeof isEmail;
    isFunction: typeof isFunction;
    isHTTP: typeof isHTTP;
    isJSON: typeof isJSON;
    isJSONString: typeof isJSONString;
    isJWT: typeof isJWT;
    isModule: typeof isModule;
    isNumber: typeof isNumber;
    isObject: typeof isObject;
    isObjectValid: typeof isObjectValid;
    isPhoneNumber: typeof isPhoneNumber;
    isRegex: typeof isRegex;
    isURL: typeof isURL;
    isValid: typeof isValid;
};
export default _default;
