"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistorytrendprops_1 = __importDefault(require("./pricehistorytrendprops"));
function pricehistorytrend(option, candle, series) {
    if (option.trend !== true)
        return;
    const prev = series[series.length - 2];
    if (!prev)
        return;
    for (const prop of pricehistorytrendprops_1.default) {
        const vA = candle[prop];
        const vB = prev[prop];
        if (typeof vA === "number" && typeof vB === "number") {
            if (vA > vB) {
                candle[`${prop}Trend`] = "up";
            }
            else if (vA < vB) {
                candle[`${prop}Trend`] = "down";
            }
            else {
                candle[`${prop}Trend`] = "";
            }
        }
    }
}
exports.default = pricehistorytrend;
