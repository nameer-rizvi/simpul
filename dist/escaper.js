"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function escaper(input) {
    if (validate_1.default.isString(input)) {
        if ("escape" in RegExp && typeof RegExp.escape === "function") {
            return RegExp.escape(input);
        }
        else {
            return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
    }
}
exports.default = escaper;
// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
