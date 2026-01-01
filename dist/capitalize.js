"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function capitalize(input) {
    if (validate_1.default.isString(input)) {
        const trimmed = input.trim();
        if (!trimmed)
            return "";
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }
}
exports.default = capitalize;
