"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function encode(input) {
    if (validate_1.default.isString(input)) {
        if (validate_1.default.isEnvWindow) {
            return btoa(encodeURIComponent(input));
        }
        else {
            return Buffer.from(input, "utf-8").toString("base64");
        }
    }
}
function decode(base64) {
    if (validate_1.default.isBase64(base64)) {
        if (validate_1.default.isEnvWindow) {
            return decodeURIComponent(atob(base64));
        }
        else {
            return Buffer.from(base64, "base64").toString("utf-8");
        }
    }
}
function encodeJSON(input) {
    if (validate_1.default.isJSON(input)) {
        return encode(JSON.stringify(input));
    }
}
function decodeJSON(base64) {
    const decoded = decode(base64);
    if (validate_1.default.isJSONString(decoded)) {
        return JSON.parse(decoded);
    }
}
exports.default = {
    encode,
    decode,
    encodeJSON,
    encodeJson: encodeJSON,
    decodeJSON,
    decodeJson: decodeJSON,
};
