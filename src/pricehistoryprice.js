const math = require("./math");

function pricehistoryprice(option, curr, candle, last) {
  candle.priceOpen = curr[option.open];

  candle.priceHigh = curr[option.high];

  candle.priceLow = curr[option.low];

  candle.priceClose = curr[option.close];

  if (option.leverage > 1) {
    let leveraged = {};

    // Price Open.

    leveraged.priceOpen = last?.priceClose2
      ? calcLeverage(last.priceClose2, candle.priceOpen, option.leverage)
      : candle.priceOpen;

    leveraged.priceHigh = calcLeverage(
      candle.priceOpen,
      candle.priceHigh,
      option.leverage,
    );

    leveraged.priceLow = calcLeverage(
      candle.priceOpen,
      candle.priceLow,
      option.leverage,
    );

    leveraged.priceClose = calcLeverage(
      candle.priceOpen,
      candle.priceClose,
      option.leverage,
    );

    candle.priceOpen = leveraged.priceOpen;

    candle.priceHigh = leveraged.priceHigh;

    candle.priceLow = leveraged.priceLow;

    candle.priceClose = leveraged.priceClose;

    candle.priceClose2 = candle.priceClose;

    if (last?.priceClose2) delete last.priceClose2;
  }

  if (option.price === true) {
    candle.priceChange = math.num(
      math.change.percent(option.basePrice, candle.priceClose) * 100,
    );

    candle.priceRange = math.discrepancy(candle.priceLow, candle.priceHigh);

    candle.priceRangeDiff = math.num(
      math.change.percent(candle.priceLow, candle.priceHigh) * 100,
    );
  }
}

function calcLeverage(num1, num2, lev) {
  return math.num(num1 + num1 * math.change.percent(num1, num2) * lev);
}

module.exports = pricehistoryprice;
