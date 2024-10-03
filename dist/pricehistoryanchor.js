"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pricehistoryanchor(option, candle) {
    if (option.anchor !== true)
        return;
    candle.anchor0 = 0;
    candle.anchor50 = 50;
    candle.anchor100 = 100;
}
exports.default = pricehistoryanchor;
