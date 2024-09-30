"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function abbreviationToNumber(abbreviation) {
    if (validate_1.default.isNumber(abbreviation))
        return Number(abbreviation);
    if (!validate_1.default.isString(abbreviation))
        return;
    const cleanAbbreviation = abbreviation.replace(/ /g, "");
    const key = cleanAbbreviation.slice(-1).toLowerCase();
    const digits = { t: 12, b: 9, m: 6, k: 3 }[key];
    if (!digits)
        return Number(cleanAbbreviation);
    const parts = cleanAbbreviation.slice(0, -1).split(".");
    let numberString = parts[0];
    if (parts[1])
        numberString += parts[1].slice(0, digits);
    numberString = numberString.padEnd(parts[0].length + digits, "0");
    return Number(numberString);
}
exports.default = abbreviationToNumber;
