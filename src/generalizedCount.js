const tryCallback = require("./tryCallback");

function generalizedCount(count, options = {}) {
  const {
    lang = "en-US",
    maximumFractionDigits = 1,
    notation = "compact",
    compactDisplay = "short",
    upperCase,
    ...restOptions
  } = options;

  let generalized = new Intl.NumberFormat(lang, {
    maximumFractionDigits,
    notation,
    compactDisplay,
    ...restOptions,
  }).format(count);

  if (generalized === "NaN") return;

  if (!upperCase && generalized) generalized = generalized.toLowerCase();

  return generalized;
}

const generalizedCountCallback = (count, options, callback) =>
  tryCallback(() => generalizedCount(count, options), callback);

module.exports = generalizedCountCallback;
