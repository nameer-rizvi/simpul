import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import math from "./math";

function pricehistoryema(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
): void {
  if (option.ema === true || option.macd === true) {
    ema(9, series, candle);

    ema(12, series, candle);

    ema(26, series, candle);
  }
}

function ema(
  period: number,
  series: Candle[],
  candle: Candle,
  numKey: string = "priceClose",
): void {
  if (!(series.length > period)) return;

  const prev = series[series.length - 2];

  let key = `ema${period}`;

  if (numKey !== "priceClose") key += numKey;

  let prevEMA = prev[key];

  if (typeof prevEMA !== "number") {
    const numbers: number[] = [];

    for (const i of series.slice(-period - 1, -1)) {
      const v = i[numKey];
      if (typeof v === "number") numbers.push(v);
    }

    if (numbers.length === period) {
      const mean = math.mean(numbers);
      if (typeof mean === "number") prevEMA = mean;
    }
  }

  if (typeof prevEMA === "number" && typeof period === "number") {
    const v = candle[numKey];

    if (typeof v === "number") {
      const k = 2 / (period + 1);

      const currEMA = math.num(v * k + prevEMA * (1 - k));

      candle[key] = currEMA;

      if (
        typeof currEMA === "number" &&
        typeof candle.priceClose === "number"
      ) {
        const signal = math.change.percent(currEMA, candle.priceClose);

        if (typeof signal === "number") {
          candle[`ema${period}Signal`] = math.num(signal * 100);
        }
      }
    }
  }
}

export { pricehistoryema, ema };
