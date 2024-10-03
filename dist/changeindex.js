"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function changeindex(array = [], oldIndex, newIndex) {
    if (!validate_1.default.isNumber(oldIndex)) {
        throw new Error('Second argument ("old index") is not a number.');
    }
    if (!validate_1.default.isNumber(newIndex)) {
        throw new Error('Third argument ("new index") is not a number.');
    }
    if (newIndex >= array.length) {
        array.length = newIndex + 1; // Extend array length if necessary.
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
}
exports.default = changeindex;
