"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function flatten(object = {}, delimiter = "_") {
    const result = {};
    function recurse(obj, currentKey) {
        Object.keys(obj).forEach((key) => {
            const newKey = currentKey ? `${currentKey}${delimiter}${key}` : key;
            if (validate_1.default.isObject(obj[key])) {
                recurse(obj[key], newKey);
            }
            else {
                result[newKey] = obj[key];
            }
        });
    }
    recurse(object, "");
    return result;
}
exports.default = flatten;
