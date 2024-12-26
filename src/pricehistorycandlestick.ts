import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import { patterns } from "./pricehistorycandlestickconfigs";

function pricehistorycandlestick(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
): void {
  if (option.candlestick !== true) return;

  candle.patterns = [];

  const prev1 = series[series.length - 2];

  const prev2 = series[series.length - 3];

  // todo... pattern.condition("props required by condition")

  for (const pattern of patterns) {
    if (pattern.condition({ candle, prev1, prev2 })) {
      // Instead of pushing condition...
      // Use pattern name as boolean for candle: candle.isShootingStar = true;
      // Add pattern boolean as score: if (candle.isBullish!==number) candle.isBullish=0; candle.isBullish++;
    }
  }
}

export default pricehistorycandlestick;
