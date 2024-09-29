function pricehistoryanchor(option, candle) {
  if (option.anchor === true) {
    candle.anchor0 = 0;

    candle.anchor50 = 50;

    candle.anchor100 = 100;
  }
}

module.exports = pricehistoryanchor;
