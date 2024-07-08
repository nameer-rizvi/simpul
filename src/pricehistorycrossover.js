const pricehistorycrossoverprops = require("./pricehistorycrossoverprops");
const validate = require("./validate");

function pricehistorycrossover(option, candle, series) {
  if (option.crossover === true) {
    const prev = series[series.length - 2];

    if (prev) {
      for (const prop1 of pricehistorycrossoverprops) {
        for (const prop2 of pricehistorycrossoverprops) {
          if (prop1 !== prop2) {
            const prevProp1 = prev[prop1];

            const prevProp2 = prev[prop2];

            const currProp1 = candle[prop1];

            const currProp2 = candle[prop2];

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
