"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trycallback(f, c) {
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
exports.default = trycallback;
