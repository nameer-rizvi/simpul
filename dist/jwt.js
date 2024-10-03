"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decode(jwt) {
    if (typeof jwt !== "string")
        return;
    try {
        const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        const array = Array.from(atob(token)).map((c) => {
            return `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`;
        });
        return decodeURIComponent(array.join(""));
    }
    catch (_a) {
        return;
    }
}
function decodeJSON(jwt) {
    const decoded = decode(jwt);
    if (!decoded)
        return;
    try {
        return JSON.parse(decoded);
    }
    catch (_a) {
        return;
    }
}
exports.default = { decode, decodeJSON };
