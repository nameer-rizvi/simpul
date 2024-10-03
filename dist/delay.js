"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(ms = 1000, onDelay) {
    return new Promise((resolve) => setTimeout(() => {
        if (onDelay)
            onDelay();
        resolve();
    }, ms));
}
exports.default = delay;
