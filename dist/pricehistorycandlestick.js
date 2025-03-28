"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistorycandlestickconfigs_1 = require("./pricehistorycandlestickconfigs");
function pricehistorycandlestick(option, candle, series) {
    if (option.candlestick !== true)
        return;
    candle.candlestickPatterns = [];
    candle.candlestickIsBullish = 0;
    candle.candlestickIsBearish = 0;
    candle.candlestickIsReversal = 0;
    candle.candlestickIsContinuation = 0;
    candle.candlestickIsIndecision = 0;
    const prev1 = series[series.length - 2];
    const prev2 = series[series.length - 3];
    const candlestick = (0, pricehistorycandlestickconfigs_1.getCandlestickProps)(candle, prev1, prev2);
    if (typeof candlestick === "undefined")
        return;
    for (const pattern of pricehistorycandlestickconfigs_1.candlestickPatterns) {
        const isPattern = pattern.conditions.every((condition) => {
            return candlestick[condition];
        });
        console.log(Object.assign({ date: candle.dateString }, candlestick));
        if (!isPattern)
            continue;
        candle.candlestickPatterns.push(pattern.name);
        candle.candlestickIsBullish += pattern.isBullish;
        candle.candlestickIsBearish += pattern.isBearish;
        candle.candlestickIsReversal += pattern.isReversal;
        candle.candlestickIsContinuation += pattern.isContinuation;
        candle.candlestickIsIndecision += pattern.isIndecision;
    }
}
exports.default = pricehistorycandlestick;
