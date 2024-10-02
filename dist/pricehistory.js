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
// import pricehistorytrend from "./pricehistorytrend";
// import pricehistorycrossover from "./pricehistorycrossover";
// import pricehistoryanchor from "./pricehistoryanchor";
// import pricehistoryscales from "./pricehistoryscales";
function pricehistory(datas = [], options) {
    const option = Object.assign({ open: "open", high: "high", low: "low", close: "close", volume: "volume", datetime: "datetime", volumefill: false, date: false, price: false, leverage: false, obv: false, vwap: false, sma: false, rsi: false, ema: false, macd: false, color: false, periods: [5, 10, 20, 50, 100, 200] }, options);
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
        // pricehistorytrend(option, candle, series);
        // pricehistorycrossover(option, candle, series);
        // pricehistoryanchor(option, candle);
        candles.push(candle);
    }
    // pricehistoryscales(option, candles);
    // const curr = candles[candles.length - 1];
    // const prev = candles[candles.length - 2];
    // const valueCap =
    //   option.valueCapAt > 0 &&
    //   (prev?.sma5VwapValue
    //     ? prev?.sma5VwapValue * (option.valueCapAt / 100)
    //     : prev?.sma1VwapValue
    //     ? prev?.sma1VwapValue * (option.valueCapAt / 100)
    //     : prev?.vwapValue
    //     ? prev?.vwapValue * (option.valueCapAt / 100)
    //     : undefined);
    return { candles };
}
exports.default = pricehistory;
