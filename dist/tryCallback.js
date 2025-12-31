"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tryCallback(f, c) {
    try {
        const r = f();
        if (c)
            c(null, r);
        return r;
    }
    catch (e) {
        if (c)
            c(e); // Ensure `e` is treated as an Error
        return;
    }
}
exports.default = tryCallback;
