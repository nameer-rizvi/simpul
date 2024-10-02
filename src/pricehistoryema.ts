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
    const k = 2 / (period + 1);
    if (typeof v === "number") {
      candle[key] = math.num(v * k + prevEMA * (1 - k));
    }
  }
}

export { pricehistoryema, ema };
