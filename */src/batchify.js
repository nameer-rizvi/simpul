const validate = require("./validate");

function batchify(array, size = 10) {
  if (!validate.isArray(array)) return;

  const batches = [];

  let i = 0;

  while (i < array.length) {
    batches.push(array.slice(i, i + size));
    i += size;
  }

  return batches;
}

module.exports = batchify;
