"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function listify(...inputs) {
    const list = [];
    for (const input of inputs) {
        const parts = validate_1.default.isString(input)
            ? input.split(",")
            : validate_1.default.isArray(input)
                ? listify(...input)
                : [];
        for (const part of parts) {
            if (validate_1.default.isString(part)) {
                const v = part.trim();
                if (v)
                    list.push(v);
            }
        }
    }
    return list;
}
exports.default = listify;
