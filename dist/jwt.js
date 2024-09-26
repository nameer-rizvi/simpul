"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decode(jwt) {
    if (typeof jwt !== "string")
        return;
    const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const decodedSplit = atob(token).split("");
    const decodedJoined = decodedSplit
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("");
    const decoded = decodeURIComponent(decodedJoined);
    return decoded;
}
function decodeJSON(jwt) {
    try {
        return JSON.parse(decode(jwt) || "");
    }
    catch (_a) {
        return;
    }
}
exports.default = { decode, decodeJSON };
