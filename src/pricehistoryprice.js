const math = require("./math");

function pricehistoryprice(keymap, curr, candle, basePrice) {
  candle.priceOpen = curr[keymap.open];

  candle.priceHigh = curr[keymap.high];

  candle.priceLow = curr[keymap.low];

  candle.priceLast = curr[keymap.close];

  candle.priceChange = math.change.percent(basePrice, candle.priceLast);

  candle.priceRange = math.discrepancy(candle.priceLow, candle.priceHigh);

  candle.volume = curr[keymap.volume];
}

module.exports = pricehistoryprice;
