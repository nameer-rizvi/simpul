const validate = require("./validate");

function flatten(object = {}, delimiter = "_") {
  const result = {};

  for (let i in object)
    if (validate.isObject(object[i])) {
      let temp = flatten(object[i]);
      for (let j in temp) result[[i, j].join(delimiter)] = temp[j];
    } else result[i] = object[i];

  return result;
}

module.exports = flatten;

// Source: https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/
