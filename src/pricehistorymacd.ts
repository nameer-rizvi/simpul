import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import math from "./math";
import { ema } from "./pricehistoryema";

function pricehistorymacd(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
) {
  if (option.macd !== true) return;

  if (typeof candle.ema12 === "number" && typeof candle.ema26 === "number") {
    candle.macd = math.num(candle.ema12 - candle.ema26);

    ema(9, series, candle, "macd");

    if (typeof candle.ema9macd === "number") {
      candle.macdSignal = math.num(candle.ema9macd);
    }

    if (
      typeof candle.macd === "number" &&
      typeof candle.macdSignal === "number"
    ) {
      candle.macdHist = math.num(candle.macd - candle.macdSignal);
    }
  }
}

export default pricehistorymacd;
