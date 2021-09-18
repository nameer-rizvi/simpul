const util = {
  generate: require("./dotPaths"),
  extract: require("./dotExtraction"),
};

function jsondiffs(prev, curr) {
  const diffs = [];

  if (JSON.stringify(prev) === JSON.stringify(curr)) return diffs;

  const allDotPaths = [...util.generate(prev), ...util.generate(curr)];

  const uniqueDotPaths = [...new Set(allDotPaths)].sort();

  const timestamp = new Date().getTime();

  for (let i = 0; i < uniqueDotPaths.length; i++) {
    let dotPath = uniqueDotPaths[i];

    let prevValue = util.extract(prev, dotPath);

    let currValue = util.extract(curr, dotPath);

    const isDiff = prevValue !== currValue;

    if (isDiff) {
      let diff = { dotPath, currValue, prevValue, timestamp };

      diff.state =
        prevValue && (currValue === null || currValue === undefined)
          ? "removed property"
          : (prevValue === null || prevValue === undefined) && currValue
          ? "added property"
          : "changed value";

      if (typeof prevValue === "number" && typeof currValue === "number")
        diff.change = prevValue - currValue;

      diffs.push(diff);
    }
  }

  return diffs;
}

module.exports = jsondiffs;

// let dotPathSplit = dotPath.split(".");
//
// let isArrayPath = isNumber(dotPathSplit.slice(-1)[0]);
//
// let prevArrayValue =
//   isArrayPath && util.extract(prev, dotPathSplit.splice(-1).join("."));
//
// let currArrayValue =
//   isArrayPath && util.extract(curr, dotPathSplit.splice(-1).join("."));
