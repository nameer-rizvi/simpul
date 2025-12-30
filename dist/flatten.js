"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function flatten(input = {}, delimiter = ".") {
    const result = {};
    const stack = [
        { obj: input, prefix: "" },
    ];
    while (stack.length) {
        const { obj, prefix } = stack.pop();
        for (const key in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, key))
                continue;
            const value = obj[key];
            const newKey = prefix ? `${prefix}${delimiter}${key}` : key;
            if (validate_1.default.isObject(value)) {
                stack.push({ obj: value, prefix: newKey });
            }
            else {
                result[newKey] = value;
            }
        }
    }
    return result;
}
exports.default = flatten;
