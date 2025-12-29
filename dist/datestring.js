"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const FORMAT_CACHE = new Map();
function datestring(input, format = "MM/DD/YYYY hh:mm:ss A", options = {}) {
    const date = validate_1.default.isDate(input) ? new Date(input) : new Date();
    const tokens = compileFormat(format);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ctx = {
        YYYY: "" + year,
        MM: zero2(month),
        DD: zero2(day),
        HH: zero2(hours24),
        hh: zero2(hours12),
        mm: zero2(minutes),
        ss: zero2(seconds),
        A: hours24 >= 12 ? "PM" : "AM",
    };
    const output = new Array(tokens.length);
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        switch (t.type) {
            case "YYYY":
                output[i] = ctx.YYYY;
                break;
            case "MM":
                output[i] = ctx.MM;
                break;
            case "DD":
                output[i] = ctx.DD;
                break;
            case "HH":
                output[i] = ctx.HH;
                break;
            case "hh":
                output[i] = options.military ? ctx.HH : ctx.hh;
                break;
            case "mm":
                output[i] = ctx.mm;
                break;
            case "ss":
                output[i] = ctx.ss;
                break;
            case "A":
                output[i] = options.military ? "" : ctx.A;
                break;
            case "LITERAL":
                output[i] = t.value;
                break;
        }
    }
    return output.join("");
}
function compileFormat(format) {
    const cached = FORMAT_CACHE.get(format);
    if (cached)
        return cached;
    const tokens = [];
    let i = 0;
    while (i < format.length) {
        const c = format[i];
        // Escaped literal: [text]
        if (c === "[") {
            const end = format.indexOf("]", i + 1);
            if (end === -1)
                throw new Error("Unclosed literal");
            tokens.push({ type: "LITERAL", value: format.slice(i + 1, end) });
            i = end + 1;
            continue;
        }
        // Multi-char tokens
        const two = format.slice(i, i + 2);
        const four = format.slice(i, i + 4);
        if (four === "YYYY") {
            tokens.push({ type: "YYYY" });
            i += 4;
            continue;
        }
        switch (two) {
            case "MM":
            case "DD":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
                tokens.push({ type: two });
                i += 2;
                continue;
        }
        if (c === "A") {
            tokens.push({ type: "A" });
            i += 1;
            continue;
        }
        tokens.push({ type: "LITERAL", value: c });
        i += 1;
    }
    FORMAT_CACHE.set(format, tokens);
    return tokens;
}
function zero2(n) {
    return n < 10 ? "0" + n : "" + n;
}
exports.default = datestring;
