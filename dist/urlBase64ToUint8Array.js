"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const base64_1 = __importDefault(require("./base64"));
function urlBase64ToUint8Array(input) {
    if (validate_1.default.isBase64(input)) {
        const padding = "=".repeat((4 - (input.length % 4)) % 4);
        const urlBase64WithPadding = (input + padding)
            .replace(/-/g, "+")
            .replace(/_/g, "/");
        const decoded = base64_1.default.decode(urlBase64WithPadding);
        if (!decoded)
            return;
        const uint8Array = new Uint8Array(decoded.length);
        for (let i = 0; i < decoded.length; ++i) {
            uint8Array[i] = decoded.charCodeAt(i);
        }
        return uint8Array;
    }
}
exports.default = urlBase64ToUint8Array;
// Source: https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6
