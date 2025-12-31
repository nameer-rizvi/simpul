"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const trim_1 = __importDefault(require("./trim"));
const PAIRS = {
    "[": "]",
    "(": ")",
    "{": "}",
    "<": ">",
    "«": "»",
    "“": "”",
    "‘": "’",
};
function trimBoundary(input, boundary, innerTrim) {
    var _a;
    if (!validate_1.default.isStringNonEmpty(input))
        return;
    let str = (0, trim_1.default)(input) || "";
    const open = boundary !== null && boundary !== void 0 ? boundary : str.charAt(0);
    const close = (_a = PAIRS[open]) !== null && _a !== void 0 ? _a : open;
    while (str.length >= 2 && str.startsWith(open) && str.endsWith(close)) {
        str = str.slice(open.length, str.length - close.length).trim();
    }
    if (innerTrim) {
        const pattern = new RegExp(`^[${innerTrim}]+|[${innerTrim}]+$`, "g");
        str = str.replace(pattern, "").trim();
    }
    return str;
}
exports.default = trimBoundary;
