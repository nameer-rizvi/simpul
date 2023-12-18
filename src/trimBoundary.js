const trim = require("./trim");

function trimBoundary(dirty, boundary, delimiter = " ") {
  let clean = trim(dirty, delimiter);

  if (clean) {
    if (!boundary) boundary = clean.charAt(0);

    if (clean.startsWith(boundary) && clean.endsWith(boundary)) {
      clean = clean.substring(1, clean.length - 1);
    }
  }

  return clean;
}

module.exports = trimBoundary;
