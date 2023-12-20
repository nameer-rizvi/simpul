const math = require("./math");

function pricehistoryprice(option, curr, candle) {
  candle.priceOpen = curr[option.open];

  candle.priceHigh = curr[option.high];

  candle.priceLow = curr[option.low];

  candle.priceClose = curr[option.close];

  if (option.price === true) {
    candle.priceChange = math.num(
      math.change.percent(option.basePrice, candle.priceClose) * 100,
    );

    candle.priceRange = math.discrepancy(candle.priceLow, candle.priceHigh);
  }

  candle.volume = curr[option.volume];
}

module.exports = pricehistoryprice;
