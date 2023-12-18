const pricehistorytrendprops = require("./pricehistorytrendprops");
const validate = require("./validate");

function pricehistorytrend(candle, series) {
  let prev = series[series.length - 2];

  for (let prop of pricehistorytrendprops) {
    if (validate.isNumber(candle[prop]) && validate.isNumber(prev?.[prop])) {
      if (candle[prop] > prev[prop]) {
        candle[`${prop}Trend`] = "up";
      } else if (candle[prop] < prev[prop]) {
        candle[`${prop}Trend`] = "down";
      } else {
        candle[`${prop}Trend`] = "";
      }
    }
  }
}

module.exports = pricehistorytrend;
