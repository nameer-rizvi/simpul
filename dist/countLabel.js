"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const generalCount_1 = __importDefault(require("./generalCount"));
const pluralize_1 = __importDefault(require("pluralize"));
function countLabel(input, plural, asFullCount) {
    let number = "";
    let label = "";
    if (validate_1.default.isNumber(input)) {
        number = asFullCount ? input.toLocaleString() : (0, generalCount_1.default)(input) || "0";
    }
    if (validate_1.default.isString(plural)) {
        label = validate_1.default.isNumber(input) ? (0, pluralize_1.default)(plural, input) : plural;
    }
    const full = [number, label].filter(Boolean).join(" ");
    return { full, number, label };
}
exports.default = countLabel;
