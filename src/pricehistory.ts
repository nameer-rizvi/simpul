import { DataPoint, PriceHistoryOptions, Candle } from "./pricehistorytypes";
import pricehistoryvolumerate from "./pricehistoryvolumerate";
import pricehistorydate from "./pricehistorydate";
import pricehistoryprice from "./pricehistoryprice";
import pricehistoryvolume from "./pricehistoryvolume";
import pricehistoryvwap from "./pricehistoryvwap";
import pricehistoryrsi from "./pricehistoryrsi";
import { pricehistoryema } from "./pricehistoryema";
import pricehistorymacd from "./pricehistorymacd";
import pricehistorycolor from "./pricehistorycolor";
import pricehistorysma from "./pricehistorysma";
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
    volumefill: false,
    date: false,
    price: false,
    leverage: false,
    obv: false,
    vwap: false,
    sma: false,
    rsi: false,
    ema: false,
    macd: false,
    color: false,
    periods: [5, 10, 20, 50, 100, 200],
    // trend: false,
    // crossover: false,
    // anchor: false,
    // valueCapAt: 100,
    // scales: [],
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

    const series = [...candles, candle];

    pricehistoryvolume(option, data, candle, series, volumerate);

    pricehistoryvwap(option, candle, series);

    pricehistoryvwap(option, candle, series.slice(-1), 1);

    pricehistoryrsi(option, candle, series);

    pricehistoryema(option, candle, series);

    pricehistorymacd(option, candle, series);

    pricehistorycolor(option, candle, series);

    for (const period of option.periods || []) {
      if (series.length >= period) {
        const seriesSlice = series.slice(-period);

        pricehistorysma(option, candle, seriesSlice, period);

        // pricehistoryvwap(option, candle, seriesSlice, period);

        // pricehistorycolor(option, candle, seriesSlice, period);
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

export default pricehistory;
