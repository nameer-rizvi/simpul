"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const trim_1 = __importDefault(require("./trim"));
const he_1 = __importDefault(require("he"));
const string_strip_html_1 = require("string-strip-html");
function cleanString(input) {
    if (validate_1.default.isString(input)) {
        return (0, trim_1.default)(he_1.default.decode((0, string_strip_html_1.stripHtml)(input).result));
    }
}
exports.default = cleanString;
