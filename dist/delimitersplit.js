"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delimiter_1 = __importDefault(require("./delimiter"));
const validate_1 = __importDefault(require("./validate"));
const cleanstring_1 = __importDefault(require("./cleanstring"));
function delimitersplit(string, delimiter = delimiter_1.default, delimiter2, filter) {
    if (!validate_1.default.isString(string))
        return [];
    let splits = string
        .replace(/<br>|<br \/>|<br\/>|\n/g, delimiter)
        .split(delimiter);
    if (delimiter2 !== undefined) {
        splits = splits.map((s) => s.split(delimiter2)).flat();
    }
    const cleanSet = [];
    for (const split of [...new Set(splits)]) {
        const clean = (0, cleanstring_1.default)(split);
        if (validate_1.default.isString(clean) && clean.length) {
            if (filter && clean.toLowerCase() === filter.toLowerCase())
                continue;
            cleanSet.push(clean);
        }
    }
    return cleanSet;
}
exports.default = delimitersplit;
