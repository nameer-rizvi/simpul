const { isObject } = require("./validate");

// https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/

function flatten(object = {}, delimiter = "_") {
  const result = {};

  for (const i in object) {
    if (isObject(object[i])) {
      const temp = flatten(object[i]);
      for (const j in temp) {
        result[i + delimiter + j] = temp[j];
      }
    } else result[i] = object[i];
  }

  return result;
}

module.exports = flatten;
