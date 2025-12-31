"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function tokenize(input, asLowerCase) {
    if (!validate_1.default.isStringNonEmpty(input)) {
        return {
            tokens: [],
            set: [],
            tokensCount: 0,
            setCount: 0,
            count: {},
        };
    }
    const cleaned = input
        .normalize("NFKC")
        .replace(/[^\p{L}\p{N}\p{Emoji_Presentation}\s'-]+/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
    const tokens = cleaned.length > 0
        ? asLowerCase
            ? cleaned.toLowerCase().split(" ")
            : cleaned.split(" ")
        : [];
    const set = Array.from(new Set(tokens));
    const count = {};
    for (const token of tokens)
        count[token] = (count[token] || 0) + 1;
    return {
        tokens,
        set,
        tokensCount: tokens.length,
        setCount: set.length,
        count,
    };
}
exports.default = tokenize;
