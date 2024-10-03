"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const cleanstring_1 = __importDefault(require("./cleanstring"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
function slug(input, delimiter = "_", maxlength = 2000) {
    if (!validate_1.default.isString(input))
        return "";
    let output = (0, cleanstring_1.default)(input);
    if (!output)
        return "";
    output = (0, trimPunctuation_1.default)(output);
    if (!output)
        return "";
    output = output.replace(/ /g, delimiter);
    output = encodeURIComponent(output);
    output = output.substring(0, maxlength);
    output = output.toLowerCase();
    return output;
}
exports.default = slug;
