"use strict";
// Non-secure JWT-style payload encoder/decoder. Not a real JWT implementation.
Object.defineProperty(exports, "__esModule", { value: true });
function encode(json) {
    try {
        return "." + Buffer.from(JSON.stringify(json), "utf-8").toString("base64");
    }
    catch (_a) {
        return;
    }
}
function decode(token) {
    try {
        const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
    }
    catch (_a) {
        return;
    }
}
exports.default = { encode, decode, decodeJson: decode, decodeJSON: decode };
