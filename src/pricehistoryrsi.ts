import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import math from "./math";

function pricehistoryrsi(
  option: PriceHistoryOptions,
  candle: Candle,
  series: Candle[],
) {
  if (option.rsi !== true) return;

  const prev = series[series.length - 2];

  if (series.length === 15) {
    let gain = 0;

    let loss = 0;

    for (let i = 0; i < series.length; i++) {
      const currPrice = series[i]?.priceClose;

      const prevPrice = series[i - 1]?.priceClose;

      if (typeof currPrice === "number" && typeof prevPrice === "number") {
        const change = currPrice - prevPrice;

        if (change > 0) gain += change;

        if (change < 0) loss += Math.abs(change);
      }
    }
    const averageGain = gain / 14;

    const averageLoss = loss / 14;

    const rsi = 100 - 100 / (1 + averageGain / averageLoss);

    candle.averageGain = math.num(averageGain);

    candle.averageLoss = math.num(averageLoss);

    candle.rsi = math.num(rsi);
  } else if (typeof prev?.rsi === "number") {
    if (typeof prev.averageGain !== "number") return;

    if (typeof prev.averageLoss !== "number") return;

    if (typeof candle.priceClose !== "number") return;

    if (typeof prev.priceClose !== "number") return;

    let gain = prev.averageGain * 13;

    let loss = prev.averageLoss * 13;

    const change = candle.priceClose - prev.priceClose;

    if (change > 0) gain += change;

    if (change < 0) loss += Math.abs(change);

    const averageGain = gain / 14;

    const averageLoss = loss / 14;

    const rsi = 100 - 100 / (1 + averageGain / averageLoss);

    candle.averageGain = math.num(averageGain);

    candle.averageLoss = math.num(averageLoss);

    candle.rsi = math.num(rsi);
  }
}

export default pricehistoryrsi;
