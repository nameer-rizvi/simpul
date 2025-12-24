"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function applyValueToNumber(number, value, operator = "+") {
    if (!validate_1.default.isNumberValid(number) || !validate_1.default.isNumberValid(value)) {
        return number;
    }
    switch (operator) {
        case "+":
            return number + value;
        case "-":
            return number - value;
        case "*":
            return number * value;
        case "/":
            return value !== 0 ? number / value : number;
        case "+%":
            return number * (1 + value / 100);
        case "-%":
            return number * (1 - value / 100);
        default:
            return number;
    }
}
exports.default = applyValueToNumber;
