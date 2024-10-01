import math from "./math";

function logPermutationDecorator(
  permutations: number,
  withDatetime: boolean = true,
) {
  let permutation = 1;

  return function logPermutation(): void {
    const datetime = withDatetime
      ? `${new Date().toLocaleString().replace(",", "")} - `
      : "";

    const isLast = permutation === permutations;

    const emoji = isLast ? "⌛" : "⏳";

    const title = isLast ? "Completed" : "Progress";

    const completed = permutation.toLocaleString();

    const total = permutations.toLocaleString();

    const perc = math.percent(permutation, permutations)?.toLocaleString() || 0;

    const text = `${datetime}${emoji} ${title} ${completed}/${total} (${perc}%)`;

    const punctuation = isLast ? "." : "...";

    const gap = isLast ? "\n" : "";

    process.stdout.clearLine(0);

    process.stdout.cursorTo(0);

    process.stdout.write(text + punctuation + gap);

    permutation++;
  };
}

export default logPermutationDecorator;
