const validate = require("./validate");

function scale(array, propName) {
  let high = 0;

  let low = 0;

  for (let item of array) {
    let num = propName ? item[propName] : item;
    if (validate.isNumber(num)) {
      if (num > high) high = num;
      if (num < low) low = num;
    }
  }

  let size = (high - low) / 100;

  for (let i = 0; i < array.length; i++) {
    let num = propName ? array[i][propName] : array[i];
    if (validate.isNumber(num)) {
      let num2 = +(num / size).toFixed(2);
      if (propName) {
        array[i][propName] = num2;
      } else {
        array[i] = num2;
      }
    }
  }
}

module.exports = scale;
