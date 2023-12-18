const math = require("./math");

function pricehistorysma(candle, series, period) {
  if (!candle[`sma${period}`] && candle.priceLast) {
    const sma = math.mean(series.map((c) => c.priceLast));

    candle[`sma${period}`] = sma;

    candle[`sma${period}Signal`] = -math.change.percent(candle.priceLast, sma);
  }

  if (candle.rsi) {
    candle[`sma${period}Rsi`] = math.mean(series.map((c) => c.rsi));
  }

  if (candle.volume) {
    candle[`sma${period}Volume`] = math.mean(series.map((c) => c.volume));
  }
}

module.exports = pricehistorysma;
