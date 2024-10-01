"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function removeStrings(str, removes = []) {
    if (validate_1.default.isString(str)) {
        return removes.reduce((result, remove) => {
            return result.replace(new RegExp(remove, "gi"), "");
        }, str);
    }
}
exports.default = removeStrings;
