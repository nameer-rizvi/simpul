"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function parseCommafiedNumber(string) {
    if (validate_1.default.isString(string)) {
        // Remove commas, split by spaces, parse the first part as a float.
        const parsedNumber = parseFloat(string.split(" ")[0].replace(/,/g, ""));
        if (!isNaN(parsedNumber))
            return parsedNumber;
    }
    return 0;
}
exports.default = parseCommafiedNumber;
