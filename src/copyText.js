const support = require("./support");
const tryCallback = require("./tryCallback");

function copy(text) {
  if (support.document()) {
    const element = document.createElement("textarea");

    element.value = text;

    document.body.appendChild(element);

    element.select();

    document.execCommand("copy");

    document.body.removeChild(element);
  }
}

const copyCallback = (text, callback) =>
  tryCallback(() => copy(text), callback);

module.exports = copyCallback;
