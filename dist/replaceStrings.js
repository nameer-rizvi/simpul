"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function replaceStrings(str, replaces = []) {
    if (validate_1.default.isString(str)) {
        return replaces.reduce((result, [pattern, replacement]) => {
            return result.replace(new RegExp(pattern, "gi"), replacement);
        }, str);
    }
}
exports.default = replaceStrings;
