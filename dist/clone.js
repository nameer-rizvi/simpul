"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
// Shallow clone with deep recursion for objects/arrays.
function clone(input) {
    if (validate_1.default.isArray(input)) {
        return input.map(clone);
    }
    else if (validate_1.default.isObject(input)) {
        const result = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                result[key] = clone(input[key]);
            }
        }
        return result;
    }
    else {
        return input;
    }
}
exports.default = clone;
