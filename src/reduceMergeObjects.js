module.exports = (arr) => arr.flat().reduce((r, c) => Object.assign(r, c), {});
