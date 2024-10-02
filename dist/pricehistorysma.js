"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function pricehistorysma(option, candle, series, period) {
    if (option.sma !== true)
        return;
    if (typeof candle.priceClose === "number") {
        const numbers = [];
        for (const i of series) {
            if (typeof i.priceClose === "number")
                numbers.push(i.priceClose);
        }
        const sma = math_1.default.mean(numbers);
        if (typeof sma === "number") {
            candle[`sma${period}`] = sma;
            const signal = math_1.default.change.percent(sma, candle.priceClose);
            if (typeof signal === "number") {
                candle[`sma${period}Signal`] = math_1.default.num(signal * 100);
            }
        }
    }
    if (typeof candle.rsi === "number") {
        const rsis = [];
        for (const i of series) {
            if (typeof i.rsi === "number")
                rsis.push(i.rsi);
        }
        candle[`sma${period}Rsi`] = math_1.default.mean(rsis);
    }
    if (typeof candle.volume === "number") {
        const volumes = [];
        for (const i of series) {
            if (typeof i.volume === "number")
                volumes.push(i.volume);
        }
        candle[`sma${period}Volume`] = math_1.default.mean(volumes);
    }
}
exports.default = pricehistorysma;
