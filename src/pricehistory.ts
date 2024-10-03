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
import pricehistorytrend from "./pricehistorytrend";
import pricehistorycrossover from "./pricehistorycrossover";
import pricehistoryanchor from "./pricehistoryanchor";
import pricehistoryscales from "./pricehistoryscales";

function pricehistory(
  datas: DataPoint[] = [],
  options: PriceHistoryOptions,
): {
  candles: Candle[];
  curr: Candle;
  prev: Candle;
  valueCap: number | undefined;
} {
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
    periods: [],
    trend: false,
    crossover: false,
    anchor: false,
    scales: [],
    valueCapAt: 100,
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

  if (option.scales?.includes("vwapdisc")) {
    option.vwap = true;
    option.sma = true;
  }

  if (option.scales?.includes("vvcvg")) {
    option.vwap = true;
    option.sma = true;
    option.color = true;
    if (!option.periods) {
      option.periods = [5];
    } else if (!option.periods.includes(5)) {
      option.periods.push(5);
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

        pricehistoryvwap(option, candle, seriesSlice, period);

        pricehistorycolor(option, candle, seriesSlice, period);
      }
    }

    pricehistorytrend(option, candle, series);

    pricehistorycrossover(option, candle, series);

    pricehistoryanchor(option, candle);

    candles.push(candle);
  }

  pricehistoryscales(option, candles);

  const curr = candles[candles.length - 1];

  const prev = candles[candles.length - 2];

  let valueCap;

  if (typeof option.valueCapAt === "number" && prev) {
    if (typeof prev.sma5VwapValue === "number") {
      valueCap = prev.sma5VwapValue * (option.valueCapAt / 100);
    } else if (typeof prev.sma1VwapValue === "number") {
      valueCap = prev.sma1VwapValue * (option.valueCapAt / 100);
    } else if (typeof prev.vwapValue === "number") {
      valueCap = prev.vwapValue * (option.valueCapAt / 100);
    }
  }

  return { candles, curr, prev, valueCap };
}

export default pricehistory;
