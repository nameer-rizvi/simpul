"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function ordinalized(number) {
    if (validate_1.default.isNumber(number)) {
        if (validate_1.default.isString(number))
            number = +number;
        const index = (number / 10) % 10 ^ 1 && number % 10;
        const ending = ["", "st", "nd", "rd"][Math.abs(index)] || "th";
        return number.toLocaleString() + ending;
    }
}
exports.default = ordinalized;
