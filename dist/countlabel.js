"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const generalcount_1 = __importDefault(require("./generalcount"));
const pluralize_1 = __importDefault(require("pluralize"));
function countlabel(input, plural, isFullCount) {
    let number = "";
    let label = "";
    if (validate_1.default.isNumber(input)) {
        number = isFullCount ? input.toLocaleString() : (0, generalcount_1.default)(input) || "0";
    }
    if (validate_1.default.isString(plural)) {
        label = validate_1.default.isNumber(input) ? (0, pluralize_1.default)(plural, input) : plural;
    }
    const full = [number, label].filter(Boolean).join(" ");
    return { full, number, label };
}
exports.default = countlabel;
