"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function applyValueToNumber(input, value, operator = "+") {
    if (!validate_1.default.isNumberValid(input) || !validate_1.default.isNumberValid(value)) {
        return input;
    }
    switch (operator) {
        case "+":
            return input + value;
        case "-":
            return input - value;
        case "*":
            return input * value;
        case "**":
            return input ** value;
        case "/":
            return value !== 0 ? input / value : input;
        case "+%":
            return input * (1 + value / 100);
        case "-%":
            return input * (1 - value / 100);
        default:
            return input;
    }
}
exports.default = applyValueToNumber;
