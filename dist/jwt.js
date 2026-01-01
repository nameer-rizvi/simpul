"use strict";
// Non-secure JWT-style payload encoder/decoder. Not a real JWT implementation.
Object.defineProperty(exports, "__esModule", { value: true });
function encode(input) {
    try {
        return "." + Buffer.from(JSON.stringify(input), "utf-8").toString("base64");
    }
    catch (_a) {
        return;
    }
}
function decode(input) {
    try {
        const payload = input.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
    }
    catch (_a) {
        return;
    }
}
exports.default = { encode, decode, decodeJson: decode, decodeJSON: decode };
