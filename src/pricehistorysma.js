const math = require("./math");

function pricehistorysma(option, candle, series, period) {
  if (option.sma === true) {
    if (!candle[`sma${period}`] && candle.priceClose) {
      let sma = math.mean(series.map((c) => c.priceClose));

      candle[`sma${period}`] = sma;

      candle[`sma${period}Signal`] = math.num(
        math.change.percent(sma, candle.priceClose) * 100,
      );
    }

    if (option.rsi === true && candle.rsi) {
      candle[`sma${period}Rsi`] = math.mean(series.map((c) => c.rsi));
    }

    if (candle.volume) {
      candle[`sma${period}Volume`] = math.mean(series.map((c) => c.volume));
    }
  }
}

module.exports = pricehistorysma;
