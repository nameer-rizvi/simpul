"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function stringnumber(string) {
    if (validate_1.default.isString(string)) {
        return Number(string.replace(/[^0-9.-]+/g, ""));
    }
}
exports.default = stringnumber;
