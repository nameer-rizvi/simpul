"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pricehistoryvolumerate_1 = __importDefault(require("./pricehistoryvolumerate"));
const pricehistorydate_1 = __importDefault(require("./pricehistorydate"));
const pricehistoryprice_1 = __importDefault(require("./pricehistoryprice"));
// import pricehistoryvolume from "./pricehistoryvolume";
// import pricehistoryvwap from "./pricehistoryvwap";
// import pricehistoryrsi from "./pricehistoryrsi";
// import { pricehistoryema } from "./pricehistoryema";
// import pricehistorymacd from "./pricehistorymacd";
// import pricehistorycolor from "./pricehistorycolor";
// import pricehistorysma from "./pricehistorysma";
// import pricehistorytrend from "./pricehistorytrend";
// import pricehistorycrossover from "./pricehistorycrossover";
// import pricehistoryanchor from "./pricehistoryanchor";
// import pricehistoryscales from "./pricehistoryscales";
function pricehistory(datas = [], options) {
    const option = Object.assign({ open: "open", high: "high", low: "low", close: "close", volume: "volume", datetime: "datetime", 
        // periods: [5, 10, 20, 50, 100, 200],
        volumefill: false, date: false, price: false, leverage: false }, options);
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
        candles.push(candle);
    }
    return { candles };
}
exports.default = pricehistory;
