module.exports = {
  byAlphabet: (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
  byDate: (arr, key) => arr.sort((a, b) => new Date(a[key]) - new Date(b[key])),
};
