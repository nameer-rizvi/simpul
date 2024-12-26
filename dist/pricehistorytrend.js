"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistorytrendprops_1 = __importDefault(require("./pricehistorytrendprops"));
const math_1 = __importDefault(require("./math"));
function pricehistorytrend(option, candle, series) {
    var _a;
    if (option.trend !== true)
        return;
    const prev = series[series.length - 2];
    if (!prev)
        return;
    for (const prop of pricehistorytrendprops_1.default) {
        const vA = candle[prop];
        const vB = prev[prop];
        if (typeof vA === "number" && typeof vB === "number") {
            candle[`${prop}Trend`] = (_a = math_1.default.change.signal(vB, vA)) === null || _a === void 0 ? void 0 : _a[0];
        }
    }
}
exports.default = pricehistorytrend;
