"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patterns = void 0;
const tolerance = 0.001;
const threshold = 0.1;
exports.patterns = [
    {
        name: "DOJI",
        condition: isDoji,
    },
    {
        name: "HAMMER",
        condition: isHammer,
    },
    {
        name: "INVERTED_HAMMER",
        condition: isInvertedHammer,
    },
    {
        name: "BULLISH_ENGULFING",
        condition: isBullishEngulfing,
    },
    {
        name: "BEARISH_ENGULFING",
        condition: isBearishEngulfing,
    },
    {
        name: "MORNING_STAR",
        condition: isMorningStar,
    },
    {
        name: "EVENING_STAR",
        condition: isEveningStar,
    },
    {
        name: "SHOOTING_STAR",
        condition: isShootingStar,
    },
    {
        name: "HANGING_MAN",
        condition: isHangingMan,
    },
    {
        name: "SPINNING_TOP",
        condition: isSpinningTop,
    },
];
function isDoji({ candle }) {
    if (typeof candle.priceOpen === "number" &&
        typeof candle.priceHigh === "number" &&
        typeof candle.priceLow === "number" &&
        typeof candle.priceClose === "number") {
        return (Math.abs(candle.priceOpen - candle.priceClose) <=
            tolerance * Math.max(candle.priceOpen, candle.priceClose) &&
            candle.priceHigh - candle.priceLow >
                2 * Math.abs(candle.priceOpen - candle.priceClose));
    }
    return false;
}
function isHammer({ candle }) {
    if (typeof candle.priceOpen === "number" &&
        typeof candle.priceHigh === "number" &&
        typeof candle.priceLow === "number" &&
        typeof candle.priceClose === "number") {
        return (candle.priceClose >= candle.priceOpen &&
            Math.abs(candle.priceClose - candle.priceOpen) <=
                (candle.priceHigh - candle.priceLow) * threshold &&
            candle.priceLow < candle.priceOpen &&
            candle.priceHigh - candle.priceClose <=
                (candle.priceClose - candle.priceLow) * threshold);
    }
    return false;
}
function isInvertedHammer({ candle }) {
    if (typeof candle.priceOpen === "number" &&
        typeof candle.priceHigh === "number" &&
        typeof candle.priceLow === "number" &&
        typeof candle.priceClose === "number") {
        candle.priceClose >= candle.priceOpen &&
            Math.abs(candle.priceClose - candle.priceOpen) <=
                (candle.priceHigh - candle.priceLow) * threshold &&
            candle.priceHigh > candle.priceOpen &&
            candle.priceClose - candle.priceLow <=
                (candle.priceHigh - candle.priceClose) * threshold;
    }
    return false;
}
function isBullishEngulfing({ candle }) {
    return false;
}
function isBearishEngulfing({ candle }) {
    return false;
}
function isMorningStar({ candle }) {
    return false;
}
function isEveningStar({ candle }) {
    return false;
}
function isShootingStar({ candle }) {
    return false;
}
function isHangingMan({ candle }) {
    return false;
}
function isSpinningTop({ candle }) {
    return false;
}
function isValid(candle) {
    return (typeof candle.priceOpen === "number" &&
        typeof candle.priceHigh === "number" &&
        typeof candle.priceLow === "number" &&
        typeof candle.priceClose === "number");
}
