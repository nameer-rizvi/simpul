"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function stringNumber(input) {
    if (validate_1.default.isString(input)) {
        return Number(input.replace(/[^0-9.-]+/g, ""));
    }
}
exports.default = stringNumber;
