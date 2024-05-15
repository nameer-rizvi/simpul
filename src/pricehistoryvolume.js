function pricehistoryvolume(option, curr, candle, series, volumerate) {
  candle.volume = curr[option.volume];

  if (!candle.volume && volumerate && candle.priceRangeDiff) {
    candle.volume = volumerate * candle.priceRangeDiff;
    candle.volumeFilled = true;
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
