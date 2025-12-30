"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function reduceObject(input = []) {
    if (!validate_1.default.isArrayNonEmpty(input))
        return {};
    const result = {};
    for (const [key, value] of input)
        result[key] = value;
    return result;
}
exports.default = reduceObject;
