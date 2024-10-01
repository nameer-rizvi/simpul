"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function logPermutationDecorator(permutations, withDatetime = true) {
    let permutation = 1;
    return function logPermutation() {
        var _a;
        const datetime = withDatetime
            ? `${new Date().toLocaleString().replace(",", "")} - `
            : "";
        const isLast = permutation === permutations;
        const emoji = isLast ? "⌛" : "⏳";
        const title = isLast ? "Completed" : "Progress";
        const completed = permutation.toLocaleString();
        const total = permutations.toLocaleString();
        const perc = ((_a = math_1.default.percent(permutation, permutations)) === null || _a === void 0 ? void 0 : _a.toLocaleString()) || 0;
        const text = `${datetime}${emoji} ${title} ${completed}/${total} (${perc}%)`;
        const punctuation = isLast ? "." : "...";
        const gap = isLast ? "\n" : "";
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(text + punctuation + gap);
        permutation++;
    };
}
exports.default = logPermutationDecorator;
