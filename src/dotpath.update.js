const { isObject, isArray } = require("./validations");

function dotpathUpdate(json, update, force) {
  if (isObject(update)) {
    const updateDotpaths = Object.keys(update);

    for (let i = 0; i < updateDotpaths.length; i++) {
      let updateDotpathSplits = updateDotpaths[i].split(".");

      let newValues = update[updateDotpaths[i]];

      let ref;

      for (let j = 0; j < updateDotpathSplits.length; j++) {
        let updateDotpathSplit = updateDotpathSplits[j];

        if (j === updateDotpathSplits.length - 1) {
          console.log(updateDotpathSplit);
        } else {
          console.log(updateDotpathSplits[j]);
        }
      }
      // updateDotpathSplits.reduce((o, i, j) => {
      //   console.log(j === updateDotpathSplits.length - 1);
      //   if (j === updateDotpathSplits.length - 1) console.log({ o, i, j });
      //   return o;
      // }, json);
    }
  }

  return json;
}

module.exports = dotpathUpdate;

dotpathUpdate([1, { 2: "hello", name: "dude" }, 3, 4], {
  "1.name": "goodbye",
});

// console.log(
//   dotpathUpdate([1, { 2: "hello", name: "dude" }, 3, 4], {
//     "1.name": "goodbye",
//   })
// );
