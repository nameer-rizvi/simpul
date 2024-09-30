"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function encode(value) {
    if (!validate_1.default.isString(value))
        return;
    return Buffer.from(value).toString("base64");
}
function decode(base64) {
    if (!validate_1.default.isBase64(base64))
        return;
    return Buffer.from(base64, "base64").toString();
}
function encodeJSON(json) {
    if (!validate_1.default.isJSON(json))
        return;
    return Buffer.from(JSON.stringify(json)).toString("base64");
}
function decodeJSON(base64) {
    if (!validate_1.default.isBase64(base64))
        return;
    return JSON.parse(Buffer.from(base64, "base64").toString());
}
exports.default = { encode, decode, encodeJSON, decodeJSON };
