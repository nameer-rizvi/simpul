import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import math from "./math";

function pricehistorysma(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
  period: number,
): void {
  if (option.sma !== true) return;

  if (typeof candle.priceClose === "number") {
    const numbers = [];

    for (const i of series) {
      if (typeof i.priceClose === "number") numbers.push(i.priceClose);
    }

    const sma = math.mean(numbers);

    if (typeof sma === "number") {
      candle[`sma${period}`] = sma;

      const signal = math.change.percent(sma, candle.priceClose);

      if (typeof signal === "number") {
        candle[`sma${period}Signal`] = math.num(signal * 100);
      }
    }
  }

  if (typeof candle.rsi === "number") {
    const rsis = [];

    for (const i of series) {
      if (typeof i.rsi === "number") rsis.push(i.rsi);
    }

    candle[`sma${period}Rsi`] = math.mean(rsis);
  }

  if (typeof candle.volume === "number") {
    const volumes = [];

    for (const i of series) {
      if (typeof i.volume === "number") volumes.push(i.volume);
    }

    candle[`sma${period}Volume`] = math.mean(volumes);
  }
}

export default pricehistorysma;
