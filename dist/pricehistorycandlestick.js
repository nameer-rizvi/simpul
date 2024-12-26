"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistorycandlestickconfigs_1 = require("./pricehistorycandlestickconfigs");
function pricehistorycandlestick(option, candle, series) {
    if (option.candlestick !== true)
        return;
    candle.patterns = [];
    const prev1 = series[series.length - 2];
    const prev2 = series[series.length - 3];
    for (const pattern of pricehistorycandlestickconfigs_1.patterns) {
        if (pattern.condition({ candle, prev1, prev2 })) {
            candle.patterns.push(pattern.name);
        }
    }
}
exports.default = pricehistorycandlestick;
