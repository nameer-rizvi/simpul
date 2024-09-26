const math = require("./math");

function pricehistorycolor(option, candle, series, period) {
  const countColor = { green: 0, red: 0, gray: 0, total: 0 };

  const countVolume = { green: 0, red: 0, gray: 0, total: 0 };

  function getColor(a, b) {
    return a > b ? "green" : a < b ? "red" : "gray";
  }

  function getPercent(num) {
    return math.percent(num, countColor.total);
  }

  function getPercent2(num) {
    return math.percent(num, countVolume.total);
  }

  if (option.color === true) {
    for (const s of series) {
      if (s.priceOpen && s.priceClose) {
        const color = getColor(s.priceClose, s.priceOpen);

        countColor[color]++;

        countColor.total++;

        if (typeof s.volume === "number") {
          countVolume[color] += s.volume;

          countVolume.total += s.volume;
        }
      }
    }

    if (option.sma === true && period) {
      const seriesPriceOpen = series[0]?.priceOpen;

      const seriespriceClose = series[series.length - 1]?.priceClose;

      candle[`sma${period}Color`] = getColor(seriesPriceOpen, seriespriceClose);

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
      candle.color = getColor(candle.priceClose, candle.priceOpen);

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
}

module.exports = pricehistorycolor;
