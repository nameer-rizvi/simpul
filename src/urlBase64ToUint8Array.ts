import validate from "./validate";
import support from "./support";

function urlBase64ToUint8Array(base64String: string): Uint8Array | undefined {
  if (validate.isBase64(base64String)) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    let rawData;

    if (support.window) {
      rawData = window.atob(base64);
    } else if (typeof Buffer !== "undefined") {
      rawData = Buffer.from(base64, "base64").toString();
    }

    if (!rawData) return;

    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  }
}

export default urlBase64ToUint8Array;

// Source: https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6