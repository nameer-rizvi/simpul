module.exports = {
  byAlphabetKey: (arr = [], key = "") =>
    arr.sort((a, b) =>
      a[key]
        .trim()
        .toLowerCase()
        .localeCompare(b[key].trim().toLowerCase())
    ),
  byDateKey: (arr = [], key = "") =>
    arr.sort((a, b) => new Date(a[key]) - new Date(b[key])),
};
