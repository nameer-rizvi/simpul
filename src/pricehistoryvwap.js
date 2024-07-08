const math = require("./math");

function pricehistoryvwap(option, candle, series, period) {
  if (option.vwap === true) {
    let price = 0;

    let pv = 0;

    let v = 0;

    for (const s of series) {
      const isValid =
        typeof s.priceHigh === "number" &&
        typeof s.priceLow === "number" &&
        typeof s.priceClose === "number" &&
        typeof s.volume === "number";

      if (isValid) {
        price = (s.priceHigh + s.priceLow + s.priceClose) / 3;

        pv += price * s.volume;

        v += s.volume;
      }
    }

    const vwap = pv / v;

    const vwapSignal = math.change.percent(vwap, price) * 100;

    const vwapValue = pv;

    if (option.sma === true && period) {
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
}

module.exports = pricehistoryvwap;
