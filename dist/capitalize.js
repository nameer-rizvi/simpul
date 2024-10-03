"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function capitalize(str) {
    if (!validate_1.default.isString(str))
        return;
    const trimmed = str.trim();
    if (trimmed.length === 0)
        return ""; // Handle edge case of an empty string after trimming.
    return trimmed[0].toUpperCase() + trimmed.slice(1);
}
exports.default = capitalize;
