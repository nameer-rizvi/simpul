"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = __importDefault(require("./support"));
function copytext(text) {
    if (support_1.default.document) {
        const element = document.createElement("textarea");
        element.value = text;
        document.body.appendChild(element);
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);
    }
}
exports.default = copytext;
