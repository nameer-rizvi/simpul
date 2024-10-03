import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import pricehistorytrendprops from "./pricehistorytrendprops";

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
      if (vA > vB) {
        candle[`${prop}Trend`] = "up";
      } else if (vA < vB) {
        candle[`${prop}Trend`] = "down";
      } else {
        candle[`${prop}Trend`] = "";
      }
    }
  }
}

export default pricehistorytrend;
