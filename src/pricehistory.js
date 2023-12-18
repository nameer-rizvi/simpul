const pricehistorydate = require("./pricehistorydate");
const pricehistoryprice = require("./pricehistoryprice");
const pricehistoryvwap = require("./pricehistoryvwap");
const pricehistoryrsi = require("./pricehistoryrsi");
const { pricehistoryema } = require("./pricehistoryema");
const pricehistorymacd = require("./pricehistorymacd");
const pricehistorycolor = require("./pricehistorycolor");
const pricehistorysma = require("./pricehistorysma");
const pricehistorytrend = require("./pricehistorytrend");
const pricehistorycrossover = require("./pricehistorycrossover");

function pricehistory(datas, keymap = {}) {
  if (!keymap.open) keymap.open = "open";

  if (!keymap.high) keymap.high = "high";

  if (!keymap.low) keymap.low = "low";

  if (!keymap.close) keymap.close = "close";

  if (!keymap.volume) keymap.volume = "volume";

  if (!keymap.datetime) keymap.datetime = "datetime";

  const candles = [];

  const basePrice = datas[0][keymap.open];

  const periods = [5, 10, 20, 50, 100, 200];

  for (let i = 0; i < datas.length; i++) {
    let curr = datas[i];

    let candle = {};

    pricehistorydate(keymap, curr, candle);

    pricehistoryprice(keymap, curr, candle, basePrice);

    let series = [...candles, candle];

    pricehistoryvwap(candle, series);

    pricehistoryvwap(candle, series.slice(-1), 1);

    pricehistoryrsi(candle, series);

    pricehistoryema(candle, series);

    pricehistorymacd(candle, series);

    pricehistorycolor(candle, series);

    for (let period of periods) {
      if (series.length >= period) {
        let seriesSlice = series.slice(-period);

        pricehistorysma(candle, seriesSlice, period);

        pricehistoryvwap(candle, seriesSlice, period);

        pricehistorycolor(candle, seriesSlice, period);
      }
    }

    pricehistorytrend(candle, series);

    pricehistorycrossover(candle, series);

    candles.push(candle);
  }

  const today = candles[candles.length - 1];

  const yesterday = candles[candles.length - 2];

  const valueCap = keymap.valueCapAt
    ? yesterday.sma5VwapValue * keymap.valueCapAt
    : yesterday.sma5VwapValue;

  return { candles, today, yesterday, valueCap };
}

module.exports = pricehistory;
