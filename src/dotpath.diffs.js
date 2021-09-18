const dotpath = {
  generate: require("./dotpath.generate"),
  extract: require("./dotpath.extract"),
};

function dotpathDiffs(prev, curr) {
  const diffs = [];

  if (JSON.stringify(prev) === JSON.stringify(curr)) return diffs;

  const pathsAll = [...dotpath.generate(prev), ...dotpath.generate(curr)];

  const pathsUnique = [...new Set(pathsAll)].sort();

  const timestamp = new Date().getTime();

  for (let i = 0; i < pathsUnique.length; i++) {
    let path = pathsUnique[i];

    let prevValue = dotpath.extract(prev, path);

    let currValue = dotpath.extract(curr, path);

    const isDiff = prevValue !== currValue;

    if (isDiff) {
      let diff = { path, currValue, prevValue, timestamp };

      let currValueRemoved = currValue === null || currValue === undefined;

      let prevValueRemoved = prevValue === null || prevValue === undefined;

      diff.state =
        prevValue && currValueRemoved
          ? "property removed"
          : prevValueRemoved && currValue
          ? "property added"
          : "value changed";

      if (typeof prevValue === "number" && typeof currValue === "number")
        diff.change = prevValue - currValue;

      diffs.push(diff);
    }
  }

  return diffs;
}

module.exports = dotpathDiffs;

// let dotPathSplit = dotPath.split(".");
//
// let isArrayPath = isNumber(dotPathSplit.slice(-1)[0]);
//
// let prevArrayValue =
//   isArrayPath && util.extract(prev, dotPathSplit.splice(-1).join("."));
//
// let currArrayValue =
//   isArrayPath && util.extract(curr, dotPathSplit.splice(-1).join("."));
