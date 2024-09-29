const math = require("./math");

function logPermutationDecorator(permutations, withDatetime = true) {
  let permutation = 1;

  return function logPermutation() {
    const datetime = withDatetime
      ? `${new Date().toLocaleString().replace(",", "")} - `
      : "";

    const isLast = permutation === permutations;

    const emoji = isLast ? "⌛" : "⏳";

    const title = isLast ? "Completed" : "Progress";

    const completed = permutation.toLocaleString();

    const total = permutations.toLocaleString();

    const perc = math.percent(permutation, permutations).toLocaleString();

    const text = `${datetime}${emoji} ${title} ${completed}/${total} (${perc}%)`;

    const punctuation = isLast ? "." : "...";

    const gap = isLast ? "\n" : "";

    process.stdout.clearLine(0);

    process.stdout.cursorTo(0);

    process.stdout.write(text + punctuation + gap);

    permutation++;
  };
}

module.exports = logPermutationDecorator;
