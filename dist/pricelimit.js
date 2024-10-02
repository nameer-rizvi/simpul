"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pricelimit(price, limit) {
    return Math.ceil((price + price * limit) * 100) / 100;
}
exports.default = pricelimit;
