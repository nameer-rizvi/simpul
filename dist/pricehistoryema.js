"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricehistoryema = pricehistoryema;
exports.ema = ema;
const math_1 = __importDefault(require("./math"));
function pricehistoryema(option, candle, series) {
    if (option.ema === true || option.macd === true) {
        ema(9, series, candle);
        ema(12, series, candle);
        ema(26, series, candle);
    }
}
function ema(period, series, candle, numKey = "priceClose") {
    if (!(series.length > period))
        return;
    const prev = series[series.length - 2];
    let key = `ema${period}`;
    if (numKey !== "priceClose")
        key += numKey;
    let prevEMA = prev[key];
    if (typeof prevEMA !== "number") {
        const numbers = [];
        for (const i of series.slice(-period - 1, -1)) {
            const v = i[numKey];
            if (typeof v === "number")
                numbers.push(v);
        }
        if (numbers.length === period) {
            const mean = math_1.default.mean(numbers);
            if (typeof mean === "number")
                prevEMA = mean;
        }
    }
    if (typeof prevEMA === "number" && typeof period === "number") {
        const v = candle[numKey];
        if (typeof v === "number") {
            const k = 2 / (period + 1);
            candle[key] = math_1.default.num(v * k + prevEMA * (1 - k));
        }
    }
}
