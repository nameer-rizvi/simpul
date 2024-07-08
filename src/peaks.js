const validate = require("./validate");
const math = require("./math");

// Identifies peaks (local maxima and minima) in an array of numbers.
function peaks(array, rank = false) {
  const results = [];

  if (validate.isArray(array)) {
    for (let i = 0; i < array.length - 2; i++) {
      const a = array[i];

      const b = array[i + 1];

      const c = array[i + 2];

      if (
        validate.isNumber(a) &&
        validate.isNumber(b) &&
        validate.isNumber(c)
      ) {
        let category;

        if (b > a && b >= c) category = "top";

        if (b < a && b <= c) category = "bottom";

        if (category) {
          const last = results[results.length - 1];

          const changeNum = last ? Math.abs(math.change.num(last.value, b)) : 0;

          results.push({ index: i + 1, value: b, category, changeNum });
        }
      }
    }
  }

  if (rank) {
    results.sort((a, b) => b.changeNum - a.changeNum);
    for (let i = 0; i < results.length; i++) results[i].changeRank = i + 1;
  }

  return results;
}

module.exports = peaks;
