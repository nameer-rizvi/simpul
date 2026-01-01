"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function removeNullValues(input = {}) {
    if (!validate_1.default.isObject(input))
        return {};
    const result = {};
    for (const [key, value] of Object.entries(input)) {
        if (value !== null && value !== undefined)
            result[key] = value;
    }
    return result;
}
exports.default = removeNullValues;
