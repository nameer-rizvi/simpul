const pricehistoryvolumerate = require("./pricehistoryvolumerate");
const pricehistorydate = require("./pricehistorydate");
const pricehistoryprice = require("./pricehistoryprice");
const pricehistoryvolume = require("./pricehistoryvolume");
const pricehistoryvwap = require("./pricehistoryvwap");
const pricehistoryrsi = require("./pricehistoryrsi");
const { pricehistoryema } = require("./pricehistoryema");
const pricehistorymacd = require("./pricehistorymacd");
const pricehistorycolor = require("./pricehistorycolor");
const pricehistorysma = require("./pricehistorysma");
const pricehistorytrend = require("./pricehistorytrend");
const pricehistorycrossover = require("./pricehistorycrossover");
const pricehistoryanchor = require("./pricehistoryanchor");
const pricehistoryscales = require("./pricehistoryscales");

function pricehistory(datas = [], option) {
  option = {
    open: "open",
    high: "high",
    low: "low",
    close: "close",
    volume: "volume",
    datetime: "datetime",
    periods: [5, 10, 20, 50, 100, 200],
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
    trend: false,
    crossover: false,
    anchor: false,
    scales: [],
    valueCapAt: 100,
    ...option,
  };

  if (!option.basePrice) {
    for (const data of datas) {
      if (data[option.open]) {
        option.basePrice = data[option.open];
        break;
      }
    }
  }

  const candles = [];

  const volumerate = pricehistoryvolumerate(datas, option);

  for (let i = 0; i < datas.length; i++) {
    const curr = datas[i];

    const candle = {};

    pricehistorydate(option, curr, candle);

    pricehistoryprice(option, curr, candle, candles[candles.length - 1]);

    const series = [...candles, candle];

    pricehistoryvolume(option, curr, candle, series, volumerate);

    pricehistoryvwap(option, candle, series);

    pricehistoryvwap(option, candle, series.slice(-1), 1);

    pricehistoryrsi(option, candle, series);

    pricehistoryema(option, candle, series);

    pricehistorymacd(option, candle, series);

    pricehistorycolor(option, candle, series);

    for (const period of option.periods) {
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

  const valueCap =
    option.valueCapAt > 0 &&
    (prev?.sma5VwapValue
      ? prev?.sma5VwapValue * (option.valueCapAt / 100)
      : prev?.sma1VwapValue
      ? prev?.sma1VwapValue * (option.valueCapAt / 100)
      : prev?.vwapValue
      ? prev?.vwapValue * (option.valueCapAt / 100)
      : undefined);

  return { candles, curr, prev, valueCap };
}

module.exports = pricehistory;
