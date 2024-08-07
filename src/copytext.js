const support = require("./support");

function copytext(text) {
  if (support.document) {
    const element = document.createElement("textarea");

    element.value = text;

    document.body.appendChild(element);

    element.select();

    document.execCommand("copy");

    document.body.removeChild(element);
  }
}

module.exports = copytext;
