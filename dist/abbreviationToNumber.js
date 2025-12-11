"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function abbreviationToNumber(input) {
    if (validate_1.default.isNumber(input))
        return Number(input);
    if (!validate_1.default.isString(input))
        return;
    const string = input.replace(/ /g, "");
    const key = string[string.length - 1].toLowerCase();
    const power = { t: 12, b: 9, m: 6, k: 3 }[key];
    if (!power)
        return parseFloat(string);
    const [part1, part2 = ""] = string.slice(0, -1).split(".");
    const joined = part1 + part2.slice(0, power);
    const padded = joined.padEnd(part1.length + power, "0");
    return Number(padded);
}
exports.default = abbreviationToNumber;
