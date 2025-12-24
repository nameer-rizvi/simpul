"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function applyValueToNumber(inputA, inputB, operator = "+") {
    if (!validate_1.default.isNumberValid(inputA) || !validate_1.default.isNumberValid(inputB)) {
        return inputA;
    }
    switch (operator) {
        case "+":
            return inputA + inputB;
        case "-":
            return inputA - inputB;
        case "*":
            return inputA * inputB;
        case "/":
            return inputB !== 0 ? inputA / inputB : inputA;
        case "+%":
            return inputA * (1 + inputB / 100);
        case "-%":
            return inputA * (1 - inputB / 100);
        default:
            return inputA;
    }
}
exports.default = applyValueToNumber;
