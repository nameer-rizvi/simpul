import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import pricehistorytrendprops from "./pricehistorytrendprops";
import math from "./math";

function pricehistorytrend(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
): void {
  if (option.trend !== true) return;

  const prev = series[series.length - 2];

  if (!prev) return;

  for (const prop of pricehistorytrendprops) {
    const vA = candle[prop];

    const vB = prev[prop];

    if (typeof vA === "number" && typeof vB === "number") {
      candle[`${prop}Trend`] = math.change.symbol(vB, vA)?.[0];
    }
  }
}

export default pricehistorytrend;
