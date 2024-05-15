const validate = require("./validate");
const math = require("./math");

function pricehistoryvolumerate(datas, option) {
  if (option.volumefill !== true) return;

  let volume = 0;

  let range = 0;

  for (let data of datas) {
    if (!validate.isNumber(data[option.volume])) continue;

    if (!validate.isNumber(data[option.high])) continue;

    if (!validate.isNumber(data[option.low])) continue;

    volume += data[option.volume];

    range += math.change.percent(data[option.low], data[option.high]) * 100;
  }

  return volume > 0 && range > 0 && math.num(volume / range);
}

module.exports = pricehistoryvolumerate;
