const tryCallback = require("./tryCallback");
const support = require("./support");

const copyText = (text, callback) =>
  tryCallback(() => {
    if (support.document()) {
      const element = document.createElement("textarea");

      element.value = text;

      document.body.appendChild(element);

      element.select();

      document.execCommand("copy");

      document.body.removeChild(element);
    } else throw new Error("Document is undefined.");
  }, callback);

module.exports = copyText;
