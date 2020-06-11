module.exports = (date) =>
  new Date(date || new Date())
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
