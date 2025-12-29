"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delimiter_1 = __importDefault(require("./delimiter"));
const validate_1 = __importDefault(require("./validate"));
const cleanstring_1 = __importDefault(require("./cleanstring"));
function delimitersplit(input, delimiter = delimiter_1.default, delimiter2, filter) {
    if (!validate_1.default.isString(input))
        return [];
    const normalized = input.replace(/<br\s*\/?>|\n/g, delimiter);
    const filterLower = filter === null || filter === void 0 ? void 0 : filter.toLowerCase();
    const result = new Set();
    for (const part of normalized.split(delimiter)) {
        const pieces = delimiter2 ? part.split(delimiter2) : [part];
        for (const piece of pieces) {
            const clean = (0, cleanstring_1.default)(piece);
            if (!validate_1.default.isStringNonEmpty(clean))
                continue;
            if (filterLower && clean.toLowerCase() === filterLower)
                continue;
            result.add(clean);
        }
    }
    return [...result];
}
exports.default = delimitersplit;
