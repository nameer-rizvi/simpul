"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function objectKeyGroup(object = {}, keyStartsWith, keyEndsWith) {
    const keys = Object.keys(object).filter((key) => {
        const startsWith = keyStartsWith && key.startsWith(keyStartsWith);
        const endsWith = keyEndsWith && key.endsWith(keyEndsWith);
        const isValid = validate_1.default.isValid(object[key]);
        return (startsWith || endsWith) && isValid;
    });
    const extracted = keys.reduce((r, k) => {
        return Object.assign(Object.assign({}, r), { [k]: object[k] });
    }, {});
    const keysWithoutId = keys.map((k) => {
        return k.replace(keyStartsWith || keyEndsWith || "", "");
    });
    const extractedWithoutId = keysWithoutId.reduce((r, k, i) => {
        return Object.assign(Object.assign({}, r), { [k]: object[keys[i]] });
    }, {});
    return { keys, keysWithoutId, extracted, extractedWithoutId };
}
exports.default = objectKeyGroup;
