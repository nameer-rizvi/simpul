"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uid() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
exports.default = uid;
