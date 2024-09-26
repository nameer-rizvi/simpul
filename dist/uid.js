"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uid(radix = 32) {
    return Date.now().toString(radix) + Math.random().toString(radix).substr(2);
}
exports.default = uid;
