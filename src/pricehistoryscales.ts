import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
import scale from "./scale";
import math from "./math";

function pricehistoryscales(
  option: PriceHistoryOptions,
  candles: Candle[],
): void {
  if (!option.scales?.length) return;

  let isVwapdisc = false;

  let isVvcvg = false;

  for (const candle of candles) {
    for (const key of option.scales) {
      if (key === "vwapdisc") {
        if (
          typeof candle.volume === "number" &&
          typeof candle.sma1VwapValue === "number"
        ) {
          candle.volumeScale = candle.volume;
          candle.sma1VwapValueScale = candle.sma1VwapValue;
          if (isVwapdisc === false) isVwapdisc = true;
        }
      } else if (key === "vvcvg") {
        if (typeof candle.sma5VwapValue === "number") {
          candle.sma5VwapValueScale = candle.sma5VwapValue;
          if (isVvcvg === false) isVvcvg = true;
        }
      } else if (typeof candle[key] === "number") {
        candle[`${key}Scale`] = candle[key];
      }
    }
  }

  for (const key of option.scales) {
    if (key === "vwapdisc") {
      if (isVwapdisc === true) {
        scale(candles, "volumeScale");
        scale(candles, "sma1VwapValueScale");
      }
    } else if (key === "vvcvg") {
      if (isVvcvg === true) {
        scale(candles, "sma5VwapValueScale");
      }
    } else {
      scale(candles, `${key}Scale`);
    }
  }

  if (isVwapdisc === true || isVvcvg === true) {
    for (const candle of candles) {
      if (isVwapdisc === true) {
        if (
          typeof candle.volumeScale === "number" &&
          typeof candle.sma1VwapValueScale === "number"
        ) {
          candle.volumeVwapValueDiscrepancy = math.change.num(
            candle.volumeScale,
            candle.sma1VwapValueScale,
          );
        }
      }
      if (isVvcvg === true) {
        if (
          typeof candle.sma5VwapValueScale === "number" &&
          typeof candle.sma5ColorVolumeGreen === "number"
        ) {
          const vvcvg = candle.sma5VwapValueScale + candle.sma5ColorVolumeGreen;
          candle.vvcvg = math.num(vvcvg / 2);
        }
      }
    }
  }

  if (option.trend === true) {
    for (let i = 0; i < candles.length; i++) {
      const curr = candles[i];
      const prev = candles[i - 1];
      for (const key of option.scales) {
        const prop =
          key === "vwapdisc"
            ? "volumeVwapValueDiscrepancy"
            : key === "vvcvg"
            ? "vvcvg"
            : `${key}Scale`;
        if (prev) {
          const vA = curr[prop];
          const vB = prev[prop];
          if (typeof vA === "number" && typeof vB === "number") {
            curr[`${prop}Trend`] = math.change.symbol(vB, vA)?.[0];
            if (curr[`${prop}Trend`]) continue;
          }
        }
        curr[`${prop}Trend`] = "";
      }
    }
  }
}

export default pricehistoryscales;
