"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistoryvolumerate_1 = __importDefault(require("./pricehistoryvolumerate"));
const pricehistorydate_1 = __importDefault(require("./pricehistorydate"));
const pricehistoryprice_1 = __importDefault(require("./pricehistoryprice"));
const pricehistoryvolume_1 = __importDefault(require("./pricehistoryvolume"));
const pricehistoryvwap_1 = __importDefault(require("./pricehistoryvwap"));
const pricehistoryrsi_1 = __importDefault(require("./pricehistoryrsi"));
const pricehistoryema_1 = require("./pricehistoryema");
const pricehistorymacd_1 = __importDefault(require("./pricehistorymacd"));
const pricehistorycolor_1 = __importDefault(require("./pricehistorycolor"));
const pricehistorysma_1 = __importDefault(require("./pricehistorysma"));
const pricehistorytrend_1 = __importDefault(require("./pricehistorytrend"));
const pricehistorycrossover_1 = __importDefault(require("./pricehistorycrossover"));
const pricehistoryanchor_1 = __importDefault(require("./pricehistoryanchor"));
const pricehistoryscales_1 = __importDefault(require("./pricehistoryscales"));
function pricehistory(datas = [], options) {
    var _a, _b;
    const option = Object.assign({ open: "open", high: "high", low: "low", close: "close", volume: "volume", datetime: "datetime", volumefill: false, date: false, price: false, leverage: false, obv: false, vwap: false, sma: false, rsi: false, ema: false, macd: false, color: false, periods: [], trend: false, crossover: false, anchor: false, scales: [], valueCapAt: 100 }, options);
    if (!option.basePrice && option.open) {
        for (const data of datas) {
            if (data[option.open]) {
                const basePrice = data[option.open];
                if (typeof basePrice === "number")
                    option.basePrice = basePrice;
                break;
            }
        }
    }
    if (option.volumefill === true) {
        option.price = true;
    }
    if ((_a = option.scales) === null || _a === void 0 ? void 0 : _a.includes("vwapdisc")) {
        option.vwap = true;
        option.sma = true;
    }
    if ((_b = option.scales) === null || _b === void 0 ? void 0 : _b.includes("vvcvg")) {
        option.vwap = true;
        option.sma = true;
        option.color = true;
        if (!option.periods) {
            option.periods = [5];
        }
        else if (!option.periods.includes(5)) {
            option.periods.push(5);
        }
    }
    const candles = [];
    const volumerate = (0, pricehistoryvolumerate_1.default)(datas, option);
    for (const data of datas) {
        const candle = {};
        (0, pricehistorydate_1.default)(option, data, candle);
        (0, pricehistoryprice_1.default)(option, data, candle, candles[candles.length - 1]);
        const series = [...candles, candle];
        (0, pricehistoryvolume_1.default)(option, data, candle, series, volumerate);
        (0, pricehistoryvwap_1.default)(option, candle, series);
        (0, pricehistoryvwap_1.default)(option, candle, series.slice(-1), 1);
        (0, pricehistoryrsi_1.default)(option, candle, series);
        (0, pricehistoryema_1.pricehistoryema)(option, candle, series);
        (0, pricehistorymacd_1.default)(option, candle, series);
        (0, pricehistorycolor_1.default)(option, candle, series);
        for (const period of option.periods || []) {
            if (series.length >= period) {
                const seriesSlice = series.slice(-period);
                (0, pricehistorysma_1.default)(option, candle, seriesSlice, period);
                (0, pricehistoryvwap_1.default)(option, candle, seriesSlice, period);
                (0, pricehistorycolor_1.default)(option, candle, seriesSlice, period);
            }
        }
        (0, pricehistorytrend_1.default)(option, candle, series);
        (0, pricehistorycrossover_1.default)(option, candle, series);
        (0, pricehistoryanchor_1.default)(option, candle);
        candles.push(candle);
    }
    (0, pricehistoryscales_1.default)(option, candles);
    const curr = candles[candles.length - 1];
    const prev = candles[candles.length - 2];
    let valueCap;
    if (typeof option.valueCapAt === "number" && prev) {
        if (typeof prev.sma5VwapValue === "number") {
            valueCap = prev.sma5VwapValue * (option.valueCapAt / 100);
        }
        else if (typeof prev.sma1VwapValue === "number") {
            valueCap = prev.sma1VwapValue * (option.valueCapAt / 100);
        }
        else if (typeof prev.vwapValue === "number") {
            valueCap = prev.vwapValue * (option.valueCapAt / 100);
        }
    }
    return { candles, curr, prev, valueCap };
}
exports.default = pricehistory;
