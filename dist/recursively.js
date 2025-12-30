"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function recursively(input, callback, depth = 0, path = []) {
    function makePath(curr) {
        const key = String(curr);
        const fullPath = path[1] ? `${path[1]}.${key}` : key;
        return [key, fullPath];
    }
    if (validate_1.default.isArray(input)) {
        const results = [];
        for (let i = 0; i < input.length; i++) {
            results.push(recursively(input[i], callback, depth + 1, makePath(i)));
        }
        return results;
    }
    if (validate_1.default.isObject(input)) {
        const result = {};
        for (const key in input) {
            if (!Object.prototype.hasOwnProperty.call(input, key))
                continue;
            result[key] = recursively(input[key], callback, depth + 1, makePath(key));
        }
        return result;
    }
    return callback({ key: path[0], path: path[1], value: input, depth });
}
exports.default = recursively;
