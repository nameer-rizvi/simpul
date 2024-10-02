import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import math from "./math";

function pricehistoryvwap(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
  period?: number,
): void {
  if (option.vwap !== true) return;

  let p = 0;

  let pv = 0;

  let v = 0;

  for (const i of series) {
    if (
      typeof i.priceHigh === "number" &&
      typeof i.priceLow === "number" &&
      typeof i.priceClose === "number" &&
      typeof i.volume === "number"
    ) {
      p = (i.priceHigh + i.priceLow + i.priceClose) / 3;

      pv += p * i.volume;

      v += i.volume;
    }
  }

  const vwap = math.num(pv / v);

  const vwapValue = math.num(pv);

  let vwapSignal, volValue;

  if (typeof vwap === "number") vwapSignal = math.change.percent(vwap, p);

  if (typeof vwapSignal === "number") vwapSignal = math.num(vwapSignal * 100);

  if (typeof candle.volume === "number") volValue = math.num(p * candle.volume);

  if (option.sma === true && typeof period === "number") {
    if (typeof vwap === "number") {
      candle[`sma${period}Vwap`] = vwap;
    }

    if (typeof vwapSignal === "number") {
      candle[`sma${period}VwapSignal`] = vwapSignal;
    }

    if (typeof vwapValue === "number") {
      candle[`sma${period}VwapValue`] = vwapValue;
    }
  } else {
    if (typeof vwap === "number") candle.vwap = vwap;
    if (typeof vwapSignal === "number") candle.vwapSignal = vwapSignal;
    if (typeof vwapValue === "number") candle.vwapValue = vwapValue;
    candle.volumeTotal = v;
    if (typeof volValue === "number") candle.volumeValue = volValue;
  }
}

export default pricehistoryvwap;
