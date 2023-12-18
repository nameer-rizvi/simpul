const math = require("./math");

function pricehistoryrsi(candle, series) {
  let prev = series[series.length - 2];

  if (series.length === 15) {
    let gain = 0;

    let loss = 0;

    for (let i = 0; i < series.length; i++) {
      let currPrice = series[i]?.priceLast;

      let prevPrice = series[i - 1]?.priceLast;

      let change = currPrice - prevPrice;

      if (change > 0) gain += change;

      if (change < 0) loss += Math.abs(change);
    }

    let averageGain = gain / 14;

    let averageLoss = loss / 14;

    let rsi = 100 - 100 / (1 + averageGain / averageLoss);

    candle.averageGain = math.num(averageGain);

    candle.averageLoss = math.num(averageLoss);

    candle.rsi = math.num(rsi);
  } else if (prev?.rsi) {
    let gain = prev.averageGain * 13;

    let loss = prev.averageLoss * 13;

    let change = candle.priceLast - prev.priceLast;

    if (change > 0) gain += change;

    if (change < 0) loss += Math.abs(change);

    let averageGain = gain / 14;

    let averageLoss = loss / 14;

    let rsi = 100 - 100 / (1 + averageGain / averageLoss);

    candle.averageGain = math.num(averageGain);

    candle.averageLoss = math.num(averageLoss);

    candle.rsi = math.num(rsi);
  }
}

module.exports = pricehistoryrsi;
