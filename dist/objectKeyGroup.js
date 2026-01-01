"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function objectKeyGroup(input = {}, keyStartsWith, keyEndsWith) {
    const keys = [];
    for (const key in input) {
        if (!Object.prototype.hasOwnProperty.call(input, key))
            continue;
        const value = input[key];
        const startsWith = keyStartsWith ? key.startsWith(keyStartsWith) : false;
        const endsWith = keyEndsWith ? key.endsWith(keyEndsWith) : false;
        if ((startsWith || endsWith) && validate_1.default.isValid(value))
            keys.push(key);
    }
    const extracted = {};
    const keysWithoutId = [];
    const extractedWithoutId = {};
    for (const key of keys) {
        extracted[key] = input[key];
        const stripped = keyStartsWith
            ? key.replace(keyStartsWith, "")
            : keyEndsWith
                ? key.replace(keyEndsWith, "")
                : key;
        keysWithoutId.push(stripped);
        extractedWithoutId[stripped] = input[key];
    }
    return { keys, keysWithoutId, extracted, extractedWithoutId };
}
exports.default = objectKeyGroup;
