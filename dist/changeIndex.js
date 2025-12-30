"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function changeIndex(input = [], oldIndex, newIndex) {
    if (!validate_1.default.isNumber(oldIndex) || !Number.isInteger(oldIndex)) {
        throw new Error('Second argument ("old index") is not a valid integer.');
    }
    if (!validate_1.default.isNumber(newIndex) || !Number.isInteger(newIndex)) {
        throw new Error('Third argument ("new index") is not a valid integer.');
    }
    if (oldIndex < 0 || oldIndex >= input.length)
        return input;
    if (newIndex >= input.length) {
        input.length = newIndex + 1; // Extend array length if necessary.
    }
    input.splice(newIndex, 0, input.splice(oldIndex, 1)[0]);
    return input;
}
exports.default = changeIndex;
