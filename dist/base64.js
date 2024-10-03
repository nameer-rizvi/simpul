"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const support_1 = __importDefault(require("./support"));
function encode(string) {
    if (validate_1.default.isString(string)) {
        if (support_1.default.window) {
            return btoa(encodeURIComponent(string));
        }
        else {
            return Buffer.from(string, "utf-8").toString("base64");
        }
    }
}
function decode(base64) {
    if (validate_1.default.isBase64(base64)) {
        if (support_1.default.window) {
            return decodeURIComponent(atob(base64));
        }
        else {
            return Buffer.from(base64, "base64").toString("utf-8");
        }
    }
}
function encodeJSON(json) {
    if (validate_1.default.isJSON(json)) {
        return encode(JSON.stringify(json));
    }
}
function decodeJSON(base64) {
    const json = decode(base64);
    if (json && validate_1.default.isJSONString(json)) {
        return JSON.parse(json);
    }
}
exports.default = { encode, decode, encodeJSON, decodeJSON };
