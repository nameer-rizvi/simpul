"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const support_1 = __importDefault(require("./support"));
function urlBase64ToUint8Array(base64String) {
    if (validate_1.default.isBase64(base64String)) {
        const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, "+")
            .replace(/_/g, "/");
        let rawData;
        if (support_1.default.window) {
            rawData = window.atob(base64);
        }
        else if (typeof Buffer !== "undefined") {
            rawData = Buffer.from(base64, "base64").toString();
        }
        if (!rawData)
            return;
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
}
exports.default = urlBase64ToUint8Array;
// Source: https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6
