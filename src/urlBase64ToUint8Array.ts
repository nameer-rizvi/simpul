import validate from "./validate";
import base64 from "./base64";

function urlBase64ToUint8Array(urlBase64: string): Uint8Array | undefined {
  if (validate.isBase64(urlBase64)) {
    const padding = "=".repeat((4 - (urlBase64.length % 4)) % 4);

    const urlBase64WithPadding = (urlBase64 + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const decoded = base64.decode(urlBase64WithPadding);

    if (!decoded) return;

    const uint8Array = new Uint8Array(decoded.length);

    for (let i = 0; i < decoded.length; ++i) {
      uint8Array[i] = decoded.charCodeAt(i);
    }

    return uint8Array;
  }
}

export default urlBase64ToUint8Array;

// Source: https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6
