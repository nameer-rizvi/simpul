"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function listify(input, delimiter = ",") {
    if (validate_1.default.isString(input)) {
        return input
            .split(delimiter)
            .map((i) => i.trim())
            .filter(Boolean);
    }
    return [];
}
exports.default = listify;
