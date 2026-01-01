"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function ordinalized(input) {
    if (validate_1.default.isNumeric(input)) {
        const number = validate_1.default.isString(input) ? Number(input) : input;
        const index = (number / 10) % 10 ^ 1 && number % 10;
        const suffix = ["th", "st", "nd", "rd"][Math.abs(index)] || "th";
        return number.toLocaleString() + suffix;
    }
}
exports.default = ordinalized;
