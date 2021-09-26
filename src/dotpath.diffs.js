const dotpath = {
  generate: require("./dotpath.generate"),
  extract: require("./dotpath.extract"),
};

const { isDate } = require("./validations");

function dotpathDiffs(prev, curr, excludePaths) {
  const diffs = [];

  if (JSON.stringify(prev) === JSON.stringify(curr)) return diffs;

  let pathsAll = [...dotpath.generate(prev), ...dotpath.generate(curr)];

  if (excludePaths)
    pathsAll = pathsAll.filter(
      (pathAll) =>
        !excludePaths.some((excludePath) => pathAll.startsWith(excludePath))
    );

  const pathsUnique = [...new Set(pathsAll)].sort();

  const timestamp = new Date().getTime();

  for (let i = 0; i < pathsUnique.length; i++) {
    let path = pathsUnique[i];

    let prevValue = dotpath.extract(prev, path);

    let currValue = dotpath.extract(curr, path);

    const isDiff =
      isDate(prevValue) && isDate(currValue)
        ? new Date(prevValue).getTime() !== new Date(currValue).getTime()
        : prevValue !== currValue;

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
