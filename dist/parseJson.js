"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function parseJson(input) {
    if (!validate_1.default.isString(input))
        return;
    const trimmed = input.trim();
    if (!trimmed)
        return;
    try {
        return JSON.parse(trimmed);
    }
    catch (_a) {
        return;
    }
}
exports.default = parseJson;
