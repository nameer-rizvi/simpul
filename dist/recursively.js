"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function recursively(json, callback, depth = 0, path = []) {
    function makePath(curr) {
        const path0 = curr.toString();
        const path1 = (path === null || path === void 0 ? void 0 : path[1]) ? `${path[1]}.${curr}` : curr.toString();
        return [path0, path1];
    }
    if (validate_1.default.isArray(json)) {
        for (let i = 0; i < json.length; i++) {
            json[i] = recursively(json[i], callback, depth + 1, makePath(i));
        }
        return json;
    }
    if (validate_1.default.isObject(json)) {
        for (const key in json) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
                json[key] = recursively(json[key], callback, depth + 1, makePath(key));
            }
        }
        return json;
    }
    return callback({ key: path[0], path: path[1], value: json, depth });
}
exports.default = recursively;
