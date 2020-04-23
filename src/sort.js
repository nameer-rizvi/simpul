module.exports = {
  byAlphabetKey: (arr, key) =>
    arr.sort((a, b) =>
      a[key].toLowerCase().localeCompare(b[key].toLowerCase())
    ),
  byDateKey: (arr, key) =>
    arr.sort((a, b) => new Date(a[key]) - new Date(b[key])),
};
