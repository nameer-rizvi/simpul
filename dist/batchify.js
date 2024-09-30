"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function batchify(array, size = 10) {
    if (!validate_1.default.isArray(array))
        return;
    const batches = [];
    let i = 0;
    while (i < array.length) {
        batches.push(array.slice(i, i + size));
        i += size;
    }
    return batches;
}
exports.default = batchify;
