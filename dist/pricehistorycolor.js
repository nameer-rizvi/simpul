"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function pricehistorycolor(option, candle, series, period) {
    if (option.color !== true)
        return;
    const countColor = { green: 0, red: 0, gray: 0, total: 0 };
    const countVolume = { green: 0, red: 0, gray: 0, total: 0 };
    function getColor(a, b) {
        return a > b ? "green" : a < b ? "red" : "gray";
    }
    function getPercent(num) {
        return math_1.default.percent(num, countColor.total);
    }
    function getPercent2(num) {
        return math_1.default.percent(num, countVolume.total);
    }
    for (const i of series) {
        if (typeof i.priceOpen === "number" && typeof i.priceClose === "number") {
            const color = getColor(i.priceClose, i.priceOpen);
            countColor[color]++;
            countColor.total++;
            if (typeof i.volume === "number") {
                countVolume[color] += i.volume;
                countVolume.total += i.volume;
            }
        }
    }
    if (option.sma === true && typeof period === "number") {
        // TODO
        // const seriesPriceOpen = series[0]?.priceOpen;
        // const seriesPriceClose = series[series.length - 1]?.priceClose;
        // candle[`sma${period}Color`] = getColor(seriesPriceOpen!, seriesPriceClose!);
        // candle[`sma${period}ColorsGreen`] = getPercent(countColor.green);
        // candle[`sma${period}ColorsRed`] = getPercent(countColor.red);
        // candle[`sma${period}ColorsGray`] = getPercent(countColor.gray);
        // candle[`sma${period}ColorVolumeGreen`] = getPercent2(countVolume.green);
        // candle[`sma${period}ColorVolumeRed`] = getPercent2(countVolume.red);
        // candle[`sma${period}ColorVolumeGray`] = getPercent2(countVolume.gray);
        // candle[`sma${period}ColorVolumeDiscrepancy`] = math.discrepancy(
        //   candle[`sma${period}ColorsGreen`],
        //   candle[`sma${period}ColorVolumeGreen`]
        // );
    }
    else {
        candle.color = getColor(candle.priceClose, candle.priceOpen);
        candle.colorsGreen = getPercent(countColor.green);
        candle.colorsRed = getPercent(countColor.red);
        candle.colorsGray = getPercent(countColor.gray);
        candle.colorVolumeGreen = getPercent2(countVolume.green);
        candle.colorVolumeRed = getPercent2(countVolume.red);
        candle.colorVolumeGray = getPercent2(countVolume.gray);
        candle.colorVolumeDiscrepancy = math_1.default.discrepancy(candle.colorsGreen, candle.colorVolumeGreen);
    }
}
exports.default = pricehistorycolor;
