"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const escaper_1 = __importDefault(require("./escaper"));
function removeStrings(input, removes = []) {
    if (!validate_1.default.isString(input) || !validate_1.default.isArrayNonEmpty(removes)) {
        return validate_1.default.isString(input) ? input : "";
    }
    let result = input;
    for (const r of removes) {
        if (validate_1.default.isRegex(r)) {
            result = result.replace(new RegExp(r.source, "gi"), "");
        }
        else if (validate_1.default.isString(r)) {
            result = result.replace(new RegExp((0, escaper_1.default)(r), "gi"), "");
        }
    }
    return result;
}
exports.default = removeStrings;
