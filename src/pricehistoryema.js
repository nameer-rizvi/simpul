const math = require("./math");

function pricehistoryema(candle, series) {
  ema(9, series, candle);

  ema(12, series, candle);

  ema(26, series, candle);
}

function ema(period, series, candle, numKey = "priceLast") {
  if (series.length > period) {
    let prev = series[series.length - 2];

    let key = `ema${period}`;

    if (numKey !== "priceLast") key += numKey;

    let prevEMA = prev[key];

    if (!prevEMA) {
      let nums = series.slice(-(period + 1), -1).map((r) => r[numKey]); // Exclude current candle.
      if (nums.length === period) prevEMA = math.mean(nums);
    }

    if (prevEMA) {
      let k = 2 / (period + 1);
      candle[key] = math.num(candle[numKey] * k + prevEMA * (1 - k));
    }
  }
}

module.exports = { pricehistoryema, ema };
