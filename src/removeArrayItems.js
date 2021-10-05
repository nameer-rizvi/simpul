function removeArrayItems(array = [], finder, replaceWith = undefined) {
  const removed = [];

  const replaced = [];

  for (var i = 0; i < array.length; i++) {
    let item = array[i];
    if (finder && finder(item, i)) {
      replaced.push(replaceWith);
    } else {
      removed.push(item);
      replaced.push(item);
    }
  }

  return { removed, replaced };
}

module.exports = removeArrayItems;
