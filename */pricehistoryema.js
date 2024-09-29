const math = require("./math");

function pricehistoryema(option, candle, series) {
  if (option.ema === true) {
    ema(9, series, candle);

    ema(12, series, candle);

    ema(26, series, candle);
  }
}

function ema(period, series, candle, numKey = "priceClose") {
  if (series.length > period) {
    const prev = series[series.length - 2];

    let key = `ema${period}`;

    if (numKey !== "priceClose") key += numKey;

    let prevEMA = prev[key];

    if (!prevEMA) {
      const nums = series.slice(-period - 1, -1).map((r) => r[numKey]);
      if (nums.length === period) prevEMA = math.mean(nums);
    }

    if (prevEMA) {
      const k = 2 / (period + 1);
      candle[key] = math.num(candle[numKey] * k + prevEMA * (1 - k));
    }
  }
}

module.exports = { pricehistoryema, ema };
