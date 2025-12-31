"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
const cleanString_1 = __importDefault(require("./cleanString"));
function slug(input, delimiter = "_", maxlength = 2000) {
    if (!validate_1.default.isString(input) || maxlength <= 0)
        return "";
    let output = input
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&|[+]/g, " and ")
        .replace(/[@]/g, " at ")
        .replace(/[%]/g, " percent ")
        .replace(/[=]/g, " is ");
    output = (0, trimPunctuation_1.default)((0, cleanString_1.default)(output), " ")
        .replace(/\s+/g, delimiter)
        .toLowerCase()
        .slice(0, maxlength);
    output = encodeURIComponent(output); // Shouldn't lower case and slice encoding.
    return output;
}
exports.default = slug;
