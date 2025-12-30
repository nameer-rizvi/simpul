"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const escaper_1 = __importDefault(require("./escaper"));
function replaceStrings(input, replaces = []) {
    if (!validate_1.default.isString(input) || !validate_1.default.isArrayNonEmpty(replaces)) {
        return validate_1.default.isString(input) ? input : "";
    }
    let result = input;
    for (const r of replaces) {
        if (validate_1.default.isRegex(r[0])) {
            result = result.replace(new RegExp(r[0].source, "gi"), r[1]);
        }
        else if (validate_1.default.isString(r[0])) {
            result = result.replace(new RegExp((0, escaper_1.default)(r[0]), "gi"), r[1]);
        }
    }
    return result;
}
exports.default = replaceStrings;
