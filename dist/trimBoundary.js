"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trim_1 = __importDefault(require("./trim"));
function trimBoundary(dirty, boundary, delimiter = " ") {
    let clean = (dirty === null || dirty === void 0 ? void 0 : dirty.trim()) || undefined;
    if (clean) {
        if (!boundary)
            boundary = clean.charAt(0);
        if (clean.startsWith(boundary) && clean.endsWith(boundary)) {
            clean = (0, trim_1.default)(clean.substring(1, clean.length - 1));
        }
    }
    return clean;
}
exports.default = trimBoundary;
