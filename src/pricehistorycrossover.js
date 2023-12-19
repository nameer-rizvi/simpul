const pricehistorycrossoverprops = require("./pricehistorycrossoverprops");
const validate = require("./validate");

function pricehistorycrossover(option, candle, series) {
  if (option.crossover === true) {
    let prev = series[series.length - 2];

    if (prev) {
      for (let prop1 of pricehistorycrossoverprops) {
        for (let prop2 of pricehistorycrossoverprops) {
          if (prop1 !== prop2) {
            let prevProp1 = prev[prop1];

            let prevProp2 = prev[prop2];

            let currProp1 = candle[prop1];

            let currProp2 = candle[prop2];

            if (validate.isNumber(currProp1) && validate.isNumber(currProp2)) {
              let state = "";

              if (
                validate.isNumber(prevProp1) &&
                validate.isNumber(prevProp2)
              ) {
                if (prevProp1 <= prevProp2 && currProp1 > currProp2) {
                  state = "crossover";
                } else if (prevProp1 >= prevProp2 && currProp1 < currProp2) {
                  state = "crossunder";
                }
              }

              if (!state && currProp1 === currProp2) {
                state = "equal";
              } else if (!state && currProp1 > currProp2) {
                state = "over";
              } else if (!state && currProp1 < currProp2) {
                state = "under";
              }

              if (state) candle[`${prop1}_to_${prop2}`] = state;
            }
          }
        }
      }
    }
  }
}

module.exports = pricehistorycrossover;
