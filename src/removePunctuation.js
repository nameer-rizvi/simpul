const validate = require("./validate");

function removePunctuation(dirty, delimiter = "") {
  if (validate.isString(dirty)) {
    return dirty.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/gi, delimiter);
  }
}

module.exports = removePunctuation;
