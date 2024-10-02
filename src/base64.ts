import validate from "./validate";
import support from "./support";

function encode(string: string): string | undefined {
  if (validate.isString(string)) {
    if (support.window) {
      return btoa(encodeURIComponent(string));
    } else {
      return Buffer.from(string, "utf-8").toString("base64");
    }
  }
}

function decode(base64: string): string | undefined {
  if (validate.isBase64(base64)) {
    if (support.window) {
      return decodeURIComponent(atob(base64));
    } else {
      return Buffer.from(base64, "base64").toString("utf-8");
    }
  }
}

function encodeJSON(json: any): string | undefined {
  if (validate.isJSON(json)) {
    return encode(JSON.stringify(json));
  }
}

function decodeJSON(base64: string): any | undefined {
  const json = decode(base64);
  if (json && validate.isJSONString(json)) {
    return JSON.parse(json);
  }
}

export default { encode, decode, encodeJSON, decodeJSON };
