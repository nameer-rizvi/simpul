const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

function median(arr) {
  arr.sort();
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2) return arr[half];
  return (arr[half - 1] + arr[half]) / 2;
}

const mode = (arr) =>
  arr
    .sort((a, b) => {
      const aLength = arr.filter((v) => v === a).length;
      const bLength = arr.filter((v) => v === b).length;
      return aLength - bLength;
    })
    .pop();

module.exports = { mean, median, mode };
