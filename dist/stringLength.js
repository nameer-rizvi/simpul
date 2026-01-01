"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function charLength(input) {
    if (validate_1.default.isString(input)) {
        return Array.from(input).length;
    }
}
function wordLength(input) {
    var _a, _b;
    if (validate_1.default.isString(input)) {
        return (_b = (_a = input.match(/[\p{L}\p{N}’'-]+/gu)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    }
}
function wordLength2(input) {
    if (validate_1.default.isString(input)) {
        let count = 0;
        let inWord = false;
        for (let i = 0; i < input.length; i++) {
            if (/\s/.test(input[i])) {
                inWord = false;
            }
            else if (!inWord) {
                count++;
                inWord = true;
            }
        }
        return count;
    }
}
exports.default = { char: charLength, word: wordLength, word2: wordLength2 };
