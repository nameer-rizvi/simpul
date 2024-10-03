import { PriceHistoryOptions, DataPoint, Candle } from "./pricehistorytypes";

function pricehistoryvolume(
  option: PriceHistoryOptions,
  curr: DataPoint,
  candle: Candle,
  series: Candle[],
  volumerate: number | undefined,
): void {
  const volume = option.volume && curr[option.volume];

  if (typeof volume === "number") {
    candle.volume = volume;
  } else if (
    typeof volumerate === "number" &&
    typeof candle.priceRangeDiff === "number"
  ) {
    candle.volume = Math.round(volumerate * candle.priceRangeDiff);
    candle.volumeFill = true;
  }

  if (
    option.obv !== true ||
    typeof candle.priceClose !== "number" ||
    typeof candle.volume !== "number"
  )
    return;

  const prev: Candle = series[series.length - 2];

  if (!prev || typeof prev.priceClose !== "number") return;

  if (typeof prev.obv !== "number") {
    candle.obv = 0;
  } else if (candle.priceClose > prev.priceClose) {
    candle.obv = prev.obv + candle.volume;
  } else if (candle.priceClose < prev.priceClose) {
    candle.obv = prev.obv - candle.volume;
  } else {
    candle.obv = prev.obv;
  }
}

export default pricehistoryvolume;
