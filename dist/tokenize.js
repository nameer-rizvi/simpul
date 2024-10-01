"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
function tokenize(string) {
    let tokens = [];
    const trimmed = (0, trimPunctuation_1.default)(string);
    if (trimmed)
        tokens = trimmed.split(" ").filter(Boolean);
    const set = [...new Set(tokens)];
    const count = {};
    for (const token of tokens) {
        count[token] = (count[token] || 0) + 1;
    }
    return {
        tokens,
        set,
        tokensCount: tokens.length,
        setCount: set.length,
        count,
    };
}
exports.default = tokenize;
