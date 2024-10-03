"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
const pricehistoryema_1 = require("./pricehistoryema");
function pricehistorymacd(option, candle, series) {
    if (option.macd !== true)
        return;
    if (typeof candle.ema12 === "number" && typeof candle.ema26 === "number") {
        candle.macd = math_1.default.num(candle.ema12 - candle.ema26);
        (0, pricehistoryema_1.ema)(9, series, candle, "macd");
        if (typeof candle.ema9macd === "number") {
            candle.macdSignal = math_1.default.num(candle.ema9macd);
        }
        if (typeof candle.macd === "number" &&
            typeof candle.macdSignal === "number") {
            candle.macdHist = math_1.default.num(candle.macd - candle.macdSignal);
        }
    }
}
exports.default = pricehistorymacd;
