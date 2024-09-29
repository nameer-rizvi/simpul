const math = require("./math");
const { ema } = require("./pricehistoryema");

function pricehistorymacd(option, candle, series) {
  if (option.macd === true) {
    if (typeof candle.ema12 === "number" && typeof candle.ema26 === "number") {
      candle.macd = math.num(candle.ema12 - candle.ema26);

      ema(9, series, candle, "macd");

      candle.macdSignal = math.num(candle.ema9macd);

      candle.macdHist = math.num(candle.macd - candle.macdSignal);
    }
  }
}

module.exports = pricehistorymacd;
