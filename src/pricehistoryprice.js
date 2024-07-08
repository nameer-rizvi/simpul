const validate = require("./validate");
const math = require("./math");

function pricehistoryprice(option, curr, candle, last) {
  candle.priceOpen = curr[option.open];

  candle.priceHigh = curr[option.high];

  candle.priceLow = curr[option.low];

  candle.priceClose = curr[option.close];

  if (validate.isNumber(option.leverage)) {
    const leveraged = {};

    leveraged.priceOpen = last?.priceClose2
      ? calcLeverage(
          last.priceClose2,
          candle.priceOpen,
          option.leverage,
          last.priceClose,
        )
      : candle.priceOpen;

    leveraged.priceHigh = calcLeverage(
      candle.priceOpen,
      candle.priceHigh,
      option.leverage,
      leveraged.priceOpen,
    );

    leveraged.priceLow = calcLeverage(
      candle.priceOpen,
      candle.priceLow,
      option.leverage,
      leveraged.priceOpen,
    );

    leveraged.priceClose = calcLeverage(
      candle.priceOpen,
      candle.priceClose,
      option.leverage,
      leveraged.priceOpen,
    );

    candle.priceOpen = leveraged.priceOpen;

    candle.priceHigh = leveraged.priceHigh;

    candle.priceLow = leveraged.priceLow;

    candle.priceClose2 = candle.priceClose;

    candle.priceClose = leveraged.priceClose;

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

function calcLeverage(num1, num2, lev, num3) {
  return math.num(num3 + num3 * (math.change.percent(num1, num2) * lev));
}

module.exports = pricehistoryprice;
