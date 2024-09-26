const validate = require("./validate");

function changeindex(array = [], oldIndex, newIndex) {
  if (!validate.isNumber(oldIndex)) {
    throw new Error('Second argument ("old index") is not a number.');
  }

  if (!validate.isNumber(newIndex)) {
    throw new Error('Third argument ("new index") is not a number.');
  }

  if (newIndex >= array.length) {
    array.length = newIndex + 1; // Extend array length if necessary
  }

  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);

  return array;
}

module.exports = changeindex;
