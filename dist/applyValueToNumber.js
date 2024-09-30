"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function applyValueToNumber(number, value, operator = "+") {
    if (!validate_1.default.isNumber(number) || !validate_1.default.isNumber(value))
        return number;
    switch (operator) {
        case "+":
            return number + value;
        case "-":
            return number - value;
        case "*":
            return number * value;
        case "/":
            return number / value;
        case "+%":
            return number + (number * value) / 100;
        case "-%":
            return number - (number * value) / 100;
        default:
            return number;
    }
}
exports.default = applyValueToNumber;
