const validate = require("./validate");
const math = require("./math");

function peaks(array, rank = false) {
  const results = [];

  if (validate.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      let a = array[i];
      let b = array[i + 1];
      let c = array[i + 2];
      if (
        validate.isNumber(a) &&
        validate.isNumber(b) &&
        validate.isNumber(c)
      ) {
        let type;
        if (b > a && b >= c) type = "top";
        if (b < a && b <= c) type = "bottom";
        if (type) {
          let last = results[results.length - 1];
          let changeNum = Math.abs(math.change.num(last?.value, b)) || 0;
          results.push({ index: i, value: b, type, changeNum });
        }
      }
    }
  }

  if (rank) {
    results.sort((a, b) => b.changeNum - a.changeNum);
    for (let i = 0; i < results.length; i++) results[i].changeRank = i + 1;
    results.sort((a, b) => a.index - b.index);
  }

  return results;
}

module.exports = peaks;
