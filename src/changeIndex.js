const { isArray, isNumber } = require("./validate");

function changeIndex(array = [], oldIndex, newIndex) {
  if (isArray(array) && isNumber(oldIndex) && isNumber(newIndex)) {
    if (newIndex >= array.length) {
      let k = newIndex - array.length + 1;

      while (k--) array.push(undefined);
    }

    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);

    return array;
  } else return array;
}

module.exports = changeIndex;
