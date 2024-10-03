"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function removeNullValues(object = {}) {
    const clean = {};
    for (const key of Object.keys(object)) {
        const value = object[key];
        if (validate_1.default.isValid(value)) {
            clean[key] = value;
        }
    }
    return clean;
}
exports.default = removeNullValues;
