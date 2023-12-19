const scale = require("./scale");
const math = require("./math");

function pricehistoryvwapdisc(option, candles) {
  if (option.sma === true && option.vwap === true) {
    if (option.vwapdisc === true) {
      scale(candles, "volumeScale");

      scale(candles, "vwapValueScale");

      for (let candle of candles) {
        candle.volumeVwapValueDiscrepancy = math.change.num(
          candle.volumeScale,
          candle.vwapValueScale,
        );
      }
    }
  }
}

module.exports = pricehistoryvwapdisc;
