import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import pricehistorycrossoverprops from "./pricehistorycrossoverprops";

function pricehistorycrossover(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
): void {
  if (option.crossover !== true) return;

  const prev = series[series.length - 2];

  if (!prev) return;

  for (const prop1 of pricehistorycrossoverprops) {
    for (const prop2 of pricehistorycrossoverprops) {
      if (prop1 === prop2) continue;

      if (prop1.startsWith("price") && prop2.startsWith("price")) continue;

      const prop1Prev = prev[prop1];

      const prop1Curr = candle[prop1];

      const prop2Prev = prev[prop2];

      const prop2Curr = candle[prop2];

      if (typeof prop1Curr !== "number" || typeof prop2Curr !== "number") {
        continue;
      }

      if (typeof prop1Prev === "number" && typeof prop2Prev === "number") {
        if (prop1Prev <= prop2Prev && prop1Curr > prop2Curr) {
          candle[`${prop1}_to_${prop2}`] = "crossover";
          continue;
        } else if (prop1Prev >= prop2Prev && prop1Curr < prop2Curr) {
          candle[`${prop1}_to_${prop2}`] = "crossunder";
          continue;
        }
      }

      if (prop1Curr === prop2Curr) {
        candle[`${prop1}_to_${prop2}`] = "equal";
      } else if (prop1Curr > prop2Curr) {
        candle[`${prop1}_to_${prop2}`] = "over";
      } else if (prop1Curr < prop2Curr) {
        candle[`${prop1}_to_${prop2}`] = "under";
      }
    }
  }
}

export default pricehistorycrossover;
