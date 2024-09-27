"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function charLength(string) {
    if (validate_1.default.isString(string)) {
        return string.length;
    }
}
function wordLength(string) {
    if (validate_1.default.isString(string)) {
        const matches = string.match(/[\w\d’'-]+/gi);
        return matches ? matches.length : 0;
    }
}
// [1] Alternate: string.split(/\s+\b/).length
// [2] Alternate: string.match(/\w+/g).length
exports.default = { char: charLength, word: wordLength };
