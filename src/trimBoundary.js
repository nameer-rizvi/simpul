const trim = require("./trim");

function trimBoundary(dirty, boundary = `"`, delimiter = " ") {
  let clean = trim(dirty, delimiter);

  if (
    clean &&
    boundary &&
    clean.startsWith(boundary) &&
    clean.endsWith(boundary)
  )
    clean = clean.substring(1, clean.length - 1).trim();

  return clean;
}

module.exports = trimBoundary;
