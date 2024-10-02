import { DataPoint, PriceHistoryOptions, Candle } from "./pricehistorytypes";
import pricehistoryvolumerate from "./pricehistoryvolumerate";
import pricehistorydate from "./pricehistorydate";
import pricehistoryprice from "./pricehistoryprice";
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

function pricehistory(datas: DataPoint[] = [], options: PriceHistoryOptions) {
  const option: PriceHistoryOptions = {
    open: "open",
    high: "high",
    low: "low",
    close: "close",
    volume: "volume",
    datetime: "datetime",
    // periods: [5, 10, 20, 50, 100, 200],
    volumefill: false,
    date: false,
    price: false,
    leverage: false,
    // obv: false,
    // vwap: false,
    // sma: false,
    // rsi: false,
    // ema: false,
    // macd: false,
    // color: false,
    // trend: false,
    // crossover: false,
    // anchor: false,
    // scales: [],
    // valueCapAt: 100,
    ...options,
  };

  if (!option.basePrice && option.open) {
    for (const data of datas) {
      if (data[option.open]) {
        const basePrice = data[option.open];
        if (typeof basePrice === "number") option.basePrice = basePrice;
        break;
      }
    }
  }

  const candles: Candle[] = [];

  const volumerate = pricehistoryvolumerate(datas, option);

  for (const data of datas) {
    const candle: Candle = {};

    pricehistorydate(option, data, candle);

    pricehistoryprice(option, data, candle, candles[candles.length - 1]);

    candles.push(candle);
  }

  return { candles };
}

export default pricehistory;
