const math = require("./math");

function pricehistoryvolume(option, curr, candle, series) {
  candle.volume = curr[option.volume];

  if (candle.volume === 0 && typeof candle.priceRangeDiff === "number") {
    if (option.volumefill === true) {
      let series2 = option.volumefillperiod
        ? series.slice(-option.volumefillperiod)
        : series;
      let totalPriceRangeDiff = 0;
      let totalVolume = 0;
      for (let s of series2) {
        let isValidPriceRangeDiff = typeof s.priceRangeDiff === "number";
        let isValidVolume = typeof s.volume === "number";
        if (isValidPriceRangeDiff && isValidVolume) {
          totalPriceRangeDiff += s.priceRangeDiff;
          totalVolume += s.volume;
        }
      }
      let rate = math.num(totalVolume / totalPriceRangeDiff);
      candle.volume = math.num(candle.priceRangeDiff * rate);
    }
  }

  if (option.obv === true) {
    let prev = series[series.length - 2];
    if (candle.priceClose > prev?.priceClose) {
      candle.obv = prev.obv + candle.volume;
    } else if (candle.priceClose < prev?.priceClose) {
      candle.obv = prev.obv - candle.volume;
    } else candle.obv = prev?.obv || 0;
  }
}

module.exports = pricehistoryvolume;
