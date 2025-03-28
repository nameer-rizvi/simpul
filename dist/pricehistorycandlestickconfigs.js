"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candlestickPatterns = void 0;
exports.getCandlestickProps = getCandlestickProps;
// https://github.com/cm45t3r/candlestick/blob/main/src/candlestick.js#L126
// https://help.tc2000.com/m/69445/l/800589-bullish-candlestick-patterns-formulas-table
function getCandlestickProps(candle, prev1, prev2) {
    if (typeof (candle === null || candle === void 0 ? void 0 : candle.priceOpen) !== "number" ||
        typeof (candle === null || candle === void 0 ? void 0 : candle.priceHigh) !== "number" ||
        typeof (candle === null || candle === void 0 ? void 0 : candle.priceLow) !== "number" ||
        typeof (candle === null || candle === void 0 ? void 0 : candle.priceClose) !== "number")
        return;
    const length = candle.priceHigh - candle.priceLow;
    const body = Math.abs(candle.priceOpen - candle.priceClose);
    const upper = candle.priceHigh - Math.max(candle.priceOpen, candle.priceClose);
    const lower = Math.min(candle.priceOpen, candle.priceClose) - candle.priceLow;
    const bodySize = body / length;
    const upperSize = upper / length;
    const lowerSize = lower / length;
    const isBullish = candle.priceClose > candle.priceOpen;
    const isBearish = candle.priceClose < candle.priceOpen;
    const isNeutral = candle.priceClose === candle.priceOpen;
    let isBullishPrev1 = false;
    let isBullishPrev2 = false;
    let isEngulfed = false;
    let isGapUp = false;
    let isGapDown = false;
    if (typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceOpen) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceHigh) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceLow) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceClose) === "number") {
        isBullishPrev1 = prev1.priceClose > prev1.priceOpen;
        const currEnd = getEnds([candle.priceOpen, candle.priceClose]);
        const prev1End = getEnds([prev1.priceOpen, prev1.priceClose]);
        isEngulfed =
            prev1End.top <= currEnd.top && prev1End.bottom >= currEnd.bottom;
        isGapUp = prev1End.top < currEnd.bottom;
        isGapDown = prev1End.bottom > currEnd.top;
    }
    if (typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceOpen) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceHigh) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceLow) === "number" &&
        typeof (prev1 === null || prev1 === void 0 ? void 0 : prev1.priceClose) === "number" &&
        typeof (prev2 === null || prev2 === void 0 ? void 0 : prev2.priceOpen) === "number" &&
        typeof (prev2 === null || prev2 === void 0 ? void 0 : prev2.priceHigh) === "number" &&
        typeof (prev2 === null || prev2 === void 0 ? void 0 : prev2.priceLow) === "number" &&
        typeof (prev2 === null || prev2 === void 0 ? void 0 : prev2.priceClose) === "number") {
        isBullishPrev2 = prev2.priceClose > prev2.priceOpen;
    }
    const isUpper0 = upperSize < 0.1;
    const isBody0 = bodySize < 0.1;
    const isLower0 = lowerSize < 0.1;
    const isUpper1 = upperSize > 0.9;
    const isBody1 = bodySize > 0.9;
    const isLower1 = lowerSize > 0.9;
    const isUpperGreaterThanBody1 = upperSize > bodySize;
    const isUpperGreaterThanBody2 = upperSize > bodySize * 2;
    const isUpperGreaterThanBody3 = upperSize > bodySize * 3;
    const isUpperSmallerThanBody1 = upperSize < bodySize;
    const isUpperSmallerThanBody2 = upperSize < bodySize / 2;
    const isUpperSmallerThanBody3 = upperSize < bodySize / 3;
    const isLowerGreaterThanBody1 = lowerSize > bodySize;
    const isLowerGreaterThanBody2 = lowerSize > bodySize * 2;
    const isLowerGreaterThanBody3 = lowerSize > bodySize * 3;
    const isLowerSmallerThanBody1 = lowerSize < bodySize;
    const isLowerSmallerThanBody2 = lowerSize < bodySize / 2;
    const isLowerSmallerThanBody3 = lowerSize < bodySize / 3;
    return {
        bodySize,
        upperSize,
        lowerSize,
        isBullish,
        isBullishPrev1,
        isBullishPrev2,
        isBearish,
        isNeutral,
        isEngulfed,
        isGapUp,
        isGapDown,
        isUpper0,
        isBody0,
        isLower0,
        isUpperGreaterThanBody1,
        isUpperGreaterThanBody2,
        isUpperGreaterThanBody3,
        isUpperSmallerThanBody1,
        isUpperSmallerThanBody2,
        isUpperSmallerThanBody3,
        isLowerGreaterThanBody1,
        isLowerGreaterThanBody2,
        isLowerGreaterThanBody3,
        isLowerSmallerThanBody1,
        isLowerSmallerThanBody2,
        isLowerSmallerThanBody3,
    };
}
function getEnds(candle) {
    return candle[0] <= candle[1]
        ? { bottom: candle[0], top: candle[1] }
        : { bottom: candle[1], top: candle[0] };
}
exports.candlestickPatterns = [
    // Bullish Reversal Patterns
    {
        name: "hammer",
        isBullish: 1,
        isBearish: 0,
        isReversal: 1,
        isContinuation: 0,
        isIndecision: 0,
        conditions: [
            "isBullish",
            "isUpperSmallerThanBody1",
            "isLowerGreaterThanBody2",
        ],
    },
    {
        name: "invertedHammer",
        isBullish: 1,
        isBearish: 0,
        isReversal: 1,
        isContinuation: 0,
        isIndecision: 0,
        conditions: [
            "isBullish",
            "isUpperGreaterThanBody2",
            "isLowerSmallerThanBody1",
        ],
    },
];
