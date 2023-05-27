const validate = require("./validate");
const clone = require("./clone");

function removeArrayItems(array = [], finder, replaceWith = undefined) {
  const removed = [];

  const replaced = [];

  if (validate.isArray(array)) {
    const arrayClone = clone(array);
    for (let i = 0; i < arrayClone.length; i++) {
      let item = arrayClone[i];
      if (finder && finder?.(item, i)) {
        replaced.push(replaceWith);
      } else {
        removed.push(item);
        replaced.push(item);
      }
    }
  }

  return { removed, replaced };
}

module.exports = removeArrayItems;
