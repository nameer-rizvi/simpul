"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function batchify(inputA, inputB = 10) {
    if (!validate_1.default.isArray(inputA) || !(inputB > 0))
        return;
    const batches = [];
    for (let i = 0; i < inputA.length; i += inputB) {
        batches.push(inputA.slice(i, i + inputB));
    }
    return batches;
}
exports.default = batchify;
