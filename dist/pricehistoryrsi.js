"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function pricehistoryrsi(option, candle, series) {
    var _a, _b;
    if (option.rsi !== true)
        return;
    const prev = series[series.length - 2];
    if (series.length === 15) {
        let gain = 0;
        let loss = 0;
        for (let i = 0; i < series.length; i++) {
            const currPrice = (_a = series[i]) === null || _a === void 0 ? void 0 : _a.priceClose;
            const prevPrice = (_b = series[i - 1]) === null || _b === void 0 ? void 0 : _b.priceClose;
            if (typeof currPrice === "number" && typeof prevPrice === "number") {
                const change = currPrice - prevPrice;
                if (change > 0)
                    gain += change;
                if (change < 0)
                    loss += Math.abs(change);
            }
        }
        const averageGain = gain / 14;
        const averageLoss = loss / 14;
        const rsi = 100 - 100 / (1 + averageGain / averageLoss);
        candle.averageGain = math_1.default.num(averageGain);
        candle.averageLoss = math_1.default.num(averageLoss);
        candle.rsi = math_1.default.num(rsi);
    }
    else if (typeof (prev === null || prev === void 0 ? void 0 : prev.rsi) === "number") {
        if (typeof prev.averageGain !== "number")
            return;
        if (typeof prev.averageLoss !== "number")
            return;
        if (typeof candle.priceClose !== "number")
            return;
        if (typeof prev.priceClose !== "number")
            return;
        let gain = prev.averageGain * 13;
        let loss = prev.averageLoss * 13;
        const change = candle.priceClose - prev.priceClose;
        if (change > 0)
            gain += change;
        if (change < 0)
            loss += Math.abs(change);
        const averageGain = gain / 14;
        const averageLoss = loss / 14;
        const rsi = 100 - 100 / (1 + averageGain / averageLoss);
        candle.averageGain = math_1.default.num(averageGain);
        candle.averageLoss = math_1.default.num(averageLoss);
        candle.rsi = math_1.default.num(rsi);
    }
}
exports.default = pricehistoryrsi;
