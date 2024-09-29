const math = require("./math");

function pricehistoryrsi(option, candle, series) {
  if (option.rsi === true) {
    const prev = series[series.length - 2];

    if (series.length === 15) {
      let gain = 0;

      let loss = 0;

      for (let i = 0; i < series.length; i++) {
        const currPrice = series[i]?.priceClose;

        const prevPrice = series[i - 1]?.priceClose;

        const change = currPrice - prevPrice;

        if (change > 0) gain += change;

        if (change < 0) loss += Math.abs(change);
      }

      const averageGain = gain / 14;

      const averageLoss = loss / 14;

      const rsi = 100 - 100 / (1 + averageGain / averageLoss);

      candle.averageGain = math.num(averageGain);

      candle.averageLoss = math.num(averageLoss);

      candle.rsi = math.num(rsi);
    } else if (prev?.rsi) {
      let gain = prev.averageGain * 13;

      let loss = prev.averageLoss * 13;

      const change = candle.priceClose - prev.priceClose;

      if (change > 0) gain += change;

      if (change < 0) loss += Math.abs(change);

      const averageGain = gain / 14;

      const averageLoss = loss / 14;

      const rsi = 100 - 100 / (1 + averageGain / averageLoss);

      candle.averageGain = math.num(averageGain);

      candle.averageLoss = math.num(averageLoss);

      candle.rsi = math.num(rsi);
    }
  }
}

module.exports = pricehistoryrsi;
