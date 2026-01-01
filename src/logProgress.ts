import math from "./math";

// Add functionality to track progress of a repeating process (i.e. loops).
function logProgressDecorator(total: number, withDatetime = true) {
  let current = 0;

  const totalString = total.toLocaleString();

  const isTTY = process.stdout.isTTY;

  return function logProgress(): void {
    if (++current > total) return;

    const isLast = current === total;

    let line = "";

    if (withDatetime) {
      line += new Date().toLocaleString().replace(",", "") + " - ";
    }

    line += isLast ? "⌛ Completed " : "⏳ Progress ";

    line += current.toLocaleString();

    line += "/";

    line += totalString;

    line += " (";

    line += math.percent(current, total) ?? 0;

    line += "%)";

    line += isLast ? ".\n" : "...";

    if (isTTY) {
      process.stdout.clearLine(0);

      process.stdout.cursorTo(0);
    }

    process.stdout.write(line);
  };
}

export default logProgressDecorator;
