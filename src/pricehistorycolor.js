const math = require("./math");

function pricehistorycolor(candle, series, period) {
  let countColor = { green: 0, red: 0, gray: 0, total: 0 };

  let countVolume = { green: 0, red: 0, gray: 0, total: 0 };

  for (let s of series) {
    if (s.priceOpen && s.priceLast) {
      let color = getColor(s.priceLast, s.priceOpen);

      countColor[color]++;

      countColor.total++;

      if (typeof s.volume === "number") {
        countVolume[color] += s.volume;

        countVolume.total += s.volume;
      }
    }
  }

  function getColor(a, b) {
    return a > b ? "green" : a < b ? "red" : "gray";
  }

  function getPercent(num) {
    return math.percent(num, countColor.total);
  }

  function getPercent2(num) {
    return math.percent(num, countVolume.total);
  }

  if (period) {
    let seriesPriceOpen = series[0]?.priceOpen;

    let seriesPriceLast = series[series.length - 1]?.priceLast;

    candle[`sma${period}Color`] = getColor(seriesPriceOpen, seriesPriceLast);

    candle[`sma${period}ColorsGreen`] = getPercent(countColor.green);

    candle[`sma${period}ColorsRed`] = getPercent(countColor.red);

    candle[`sma${period}ColorsGray`] = getPercent(countColor.gray);

    candle[`sma${period}ColorVolumeGreen`] = getPercent2(countVolume.green);

    candle[`sma${period}ColorVolumeRed`] = getPercent2(countVolume.red);

    candle[`sma${period}ColorVolumeGray`] = getPercent2(countVolume.gray);

    candle[`sma${period}ColorVolumeDiscrepancy`] = math.discrepancy(
      candle[`sma${period}ColorsGreen`],
      candle[`sma${period}ColorVolumeGreen`],
    );
  } else {
    candle.color = getColor(candle.priceLast, candle.priceOpen);

    candle.colorsGreen = getPercent(countColor.green);

    candle.colorsRed = getPercent(countColor.red);

    candle.colorsGray = getPercent(countColor.gray);

    candle.colorVolumeGreen = getPercent2(countVolume.green);

    candle.colorVolumeRed = getPercent2(countVolume.red);

    candle.colorVolumeGray = getPercent2(countVolume.gray);

    candle.colorVolumeDiscrepancy = math.discrepancy(
      candle.colorsGreen,
      candle.colorVolumeGreen,
    );
  }
}

module.exports = pricehistorycolor;
