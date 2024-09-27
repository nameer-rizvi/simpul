"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = __importDefault(require("./support"));
function uid() {
    if (support_1.default.module("crypto")) {
        return require("crypto").randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
exports.default = uid;
