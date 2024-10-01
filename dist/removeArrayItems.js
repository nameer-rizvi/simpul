"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const clone_1 = __importDefault(require("./clone"));
function removeArrayItems(array = [], finder, replaceWith = undefined) {
    const removed = [];
    const replaced = [];
    if (validate_1.default.isArray(array)) {
        const arrayClone = (0, clone_1.default)(array);
        for (let i = 0; i < arrayClone.length; i++) {
            const item = arrayClone[i];
            if (finder && finder(item, i)) {
                replaced.push(replaceWith);
            }
            else {
                removed.push(item);
                replaced.push(item);
            }
        }
    }
    return { removed, replaced };
}
exports.default = removeArrayItems;
