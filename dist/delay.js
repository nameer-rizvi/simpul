"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(input = 1000, onDelay) {
    return new Promise((resolve) => setTimeout(resolve, input)).then(onDelay);
}
exports.default = delay;
