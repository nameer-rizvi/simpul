"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function pricehistoryvolumerate(datas, option) {
    if (option.volumefill !== true ||
        !option.volume ||
        !option.high ||
        !option.low)
        return;
    let totalVolume = 0;
    let totalRange = 0;
    for (const data of datas) {
        const volume = data[option.volume];
        const high = data[option.high];
        const low = data[option.low];
        if (typeof volume !== "number")
            continue;
        if (typeof high !== "number")
            continue;
        if (typeof low !== "number")
            continue;
        const range = math_1.default.change.percent(low, high);
        if (typeof range !== "number")
            continue;
        totalVolume += volume;
        totalRange += range * 100;
    }
    if (totalVolume > 0 && totalRange > 0) {
        return math_1.default.num(totalVolume / totalRange);
    }
}
exports.default = pricehistoryvolumerate;
