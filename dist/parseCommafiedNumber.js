"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function parseCommafiedNumber(input) {
    if (validate_1.default.isString(input)) {
        const match = input.trim().match(/^\(?-?[\d,]+(?:\.\d+)?\)?/);
        if (!match)
            return 0;
        const normalized = match[0].replace(/[(),]/g, "").trim();
        const value = Number(normalized);
        return Number.isFinite(value) ? value : 0;
    }
    return 0;
}
exports.default = parseCommafiedNumber;
