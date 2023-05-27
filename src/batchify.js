const validate = require("./validate");

function batchify(array, size = 10) {
  if (validate.isArray(array)) {
    const batches = [];

    for (let i = 0; i < array.length; i += size)
      batches.push(array.slice(i, i + size));

    return batches;
  }
}

module.exports = batchify;
