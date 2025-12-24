"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function batchify(input, size = 10) {
    if (!validate_1.default.isArray(input) || !(size > 0))
        return;
    const batches = [];
    for (let i = 0; i < input.length; i += size) {
        batches.push(input.slice(i, i + size));
    }
    return batches;
}
exports.default = batchify;
