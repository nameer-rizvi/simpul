function generalizedCount(count, callback, options = {}) {
  try {
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

    if (callback) callback(null, generalized);

    return generalized;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

module.exports = generalizedCount;
