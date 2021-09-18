const dotExtraction = (json, extract) =>
  extract && extract.split(".").reduce((o, i) => o && o[i], json);

module.exports = dotExtraction;
