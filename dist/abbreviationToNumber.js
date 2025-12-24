"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function abbreviationToNumber(input) {
    if (validate_1.default.isNumber(input))
        return input;
    if (!validate_1.default.isString(input))
        return;
    const string = input.replace(/\s+|\,/g, "");
    if (!string)
        return;
    const key = string[string.length - 1].toLowerCase();
    const power = { k: 3, m: 6, b: 9, t: 12 }[key];
    if (!power)
        return parseFloat(string);
    const base = string.slice(0, -1);
    const number = Number(base);
    if (!Number.isFinite(number))
        return;
    return number * 10 ** power;
}
exports.default = abbreviationToNumber;
