const scale = require("./scale");
const math = require("./math");

function pricehistoryscales(option, candles) {
  if (option.scales?.length) {
    for (let candle of candles) {
      for (let key of option.scales) {
        if (key === "vwapdisc") {
          candle.volumeScale = candle.volume;
          candle.sma1VwapValueScale = candle.sma1VwapValue;
        } else {
          candle[`${key}Scale`] = candle[key];
        }
      }
    }

    for (let key of option.scales) {
      if (key === "vwapdisc") {
        scale(candles, "volumeScale");
        scale(candles, "sma1VwapValueScale");
      } else {
        scale(candles, `${key}Scale`);
      }
    }

    if (option.scales.includes("vwapdisc")) {
      for (let candle of candles) {
        candle.volumeVwapValueDiscrepancy = math.change.num(
          candle.volumeScale,
          candle.sma1VwapValueScale,
        );
      }
    }

    if (option.trend === true) {
      for (let i = 0; i < candles.length; i++) {
        let curr = candles[i];
        let prev = candles[i - 1];
        for (let key of option.scales) {
          let prop =
            key === "vwapdisc" ? "volumeVwapValueDiscrepancy" : `${key}Scale`;
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
