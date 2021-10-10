const support = require("./support");
const tryCallback = require("./tryCallback");

function urlBase64ToUint8Array(base64String) {
  if (support.window()) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);

    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  }
}

const urlBase64ToUint8ArrayCallback = (base64String, callback) =>
  tryCallback(() => urlBase64ToUint8Array(base64String), callback);

module.exports = urlBase64ToUint8ArrayCallback;
