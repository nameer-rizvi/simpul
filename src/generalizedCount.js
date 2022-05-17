const tryCallback = require("./tryCallback");

const generalizedCount = (count, option = {}, callback) =>
  tryCallback(() => {
    const { lang = "en-US", upperCase, ...rest } = option;

    let generalized = new Intl.NumberFormat(lang, {
      maximumFractionDigits: 1,
      notation: "compact",
      compactDisplay: "short",
      ...rest,
    }).format(count);

    if (generalized === "NaN" || !generalized) return;

    if (!upperCase) generalized = generalized.toLowerCase();

    return generalized;
  }, callback);

module.exports = generalizedCount;
