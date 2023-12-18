const math = require("./math");

function pricehistoryvwap(candle, series, period) {
  let price = 0;

  let pv = 0;

  let v = 0;

  for (let s of series) {
    let isValid =
      typeof s.priceHigh === "number" &&
      typeof s.priceLow === "number" &&
      typeof s.priceLast === "number" &&
      typeof s.volume === "number";

    if (isValid) {
      price = (s.priceHigh + s.priceLow + s.priceLast) / 3;

      pv += price * s.volume;

      v += s.volume;
    }
  }

  let vwap = pv / v;

  let vwapSignal = -math.change.percent(price, vwap) * 100;

  let vwapValue = pv;

  if (period) {
    candle[`sma${period}Vwap`] = math.num(vwap);

    candle[`sma${period}VwapSignal`] = math.num(vwapSignal);

    candle[`sma${period}VwapValue`] = math.num(vwapValue / period);
  } else {
    candle.vwap = math.num(vwap);

    candle.vwapSignal = math.num(vwapSignal);

    candle.vwapValue = math.num(vwapValue);

    candle.volumeTotal = math.num(v);

    candle.volumeValue = math.num(price * candle.volume);
  }
}

module.exports = pricehistoryvwap;
