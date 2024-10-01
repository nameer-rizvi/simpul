"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function escaper(dirty) {
    if (validate_1.default.isString(dirty)) {
        return dirty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
}
exports.default = escaper;
// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
