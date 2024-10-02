import { PriceHistoryOptions, DataPoint, Candle } from "./pricehistorytypes";
import math from "./math";

function pricehistoryprice(
  option: PriceHistoryOptions,
  curr: DataPoint,
  candle: Candle,
  last?: Candle,
) {
  const open = option.open && curr[option.open];
  const high = option.high && curr[option.high];
  const low = option.low && curr[option.low];
  const close = option.close && curr[option.close];

  if (typeof open === "number") candle.priceOpen = open;
  if (typeof high === "number") candle.priceHigh = high;
  if (typeof low === "number") candle.priceLow = low;
  if (typeof close === "number") candle.priceClose = close;

  if (typeof option.leverage === "number" && typeof open === "number") {
    let levOpen: number | undefined = open;
    let levHigh: number | undefined;
    let levLow: number | undefined;
    let levClose: number | undefined;

    const lasClose = last?.priceClose;
    const lasClose2 = last?.priceClose2;

    if (typeof lasClose === "number" && typeof lasClose2 === "number") {
      levOpen = calcLeverage(option.leverage, lasClose2, open, lasClose);
    }

    if (typeof levOpen === "number" && typeof high === "number") {
      levHigh = calcLeverage(option.leverage, open, high, levOpen);
    }

    if (typeof levOpen === "number" && typeof low === "number") {
      levLow = calcLeverage(option.leverage, open, low, levOpen);
    }

    if (typeof levOpen === "number" && typeof close === "number") {
      levClose = calcLeverage(option.leverage, open, close, levOpen);
    }

    if (typeof levOpen === "number") candle.priceOpen = levOpen;
    if (typeof levHigh === "number") candle.priceHigh = levHigh;
    if (typeof levLow === "number") candle.priceLow = levLow;
    if (typeof levClose === "number") candle.priceClose = levClose;
    if (typeof close === "number") candle.priceClose2 = close;
    if (typeof last?.priceClose2 === "number") delete last.priceClose2;
  }

  if (option.price !== true) return;

  if (
    typeof option.basePrice === "number" &&
    typeof candle.priceClose === "number"
  ) {
    let priceChange = math.change.percent(option.basePrice, candle.priceClose);
    if (typeof priceChange === "number") {
      priceChange = math.num(priceChange * 100);
    }
    if (typeof priceChange === "number") {
      candle.priceChange = priceChange;
    }
  }

  if (
    typeof candle.priceLow === "number" &&
    typeof candle.priceHigh === "number"
  ) {
    const priceRange = math.discrepancy(candle.priceLow, candle.priceHigh);
    let priceRangeDiff = math.change.percent(candle.priceLow, candle.priceHigh);
    if (typeof priceRange === "number") {
      candle.priceRange = priceRange;
    }
    if (typeof priceRangeDiff === "number") {
      priceRangeDiff = math.num(priceRangeDiff * 100);
    }
    if (typeof priceRangeDiff === "number") {
      candle.priceRangeDiff = priceRangeDiff;
    }
  }
}

function calcLeverage(
  lev: number,
  prev: number,
  curr: number,
  mark: number,
): number | undefined {
  const change = math.change.percent(prev, curr);
  if (typeof change === "number") {
    const leveraged = math.num(mark + mark * (change * lev));
    if (typeof leveraged === "number") return leveraged;
  }
}

export default pricehistoryprice;
