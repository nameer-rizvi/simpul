const scale = require("./scale");
const math = require("./math");

function pricehistoryscales(option, candles) {
  if (option.scales?.length) {
    for (const candle of candles) {
      for (const key of option.scales) {
        if (key === "vwapdisc") {
          candle.volumeScale = candle.volume;
          candle.sma1VwapValueScale = candle.sma1VwapValue;
        } else if (key === "vvcvg") {
          candle.sma5VwapValueScale = candle.sma5VwapValue;
        } else {
          candle[`${key}Scale`] = candle[key];
        }
      }
    }

    for (const key of option.scales) {
      if (key === "vwapdisc") {
        scale(candles, "volumeScale");
        scale(candles, "sma1VwapValueScale");
      } else if (key === "vvcvg") {
        scale(candles, "sma5VwapValueScale");
      } else {
        scale(candles, `${key}Scale`);
      }
    }

    if (option.scales.includes("vwapdisc") || option.scales.includes("vvcvg")) {
      for (const candle of candles) {
        if (option.scales.includes("vwapdisc")) {
          candle.volumeVwapValueDiscrepancy = math.change.num(
            candle.volumeScale,
            candle.sma1VwapValueScale,
          );
        }
        if (option.scales.includes("vvcvg")) {
          const vvcvg = candle.sma5VwapValueScale + candle.sma5ColorVolumeGreen;
          candle.vvcvg = math.num(vvcvg / 2);
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
          if (curr[prop] > prev?.[prop]) {
            curr[`${prop}Trend`] = "up";
          } else if (curr[prop] < prev?.[prop]) {
            curr[`${prop}Trend`] = "down";
          } else {
            curr[`${prop}Trend`] = "";
          }
        }
      }
    }
  }
}

module.exports = pricehistoryscales;
