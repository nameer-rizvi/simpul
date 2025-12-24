import validate from "./validate";

function encode(input: string): string | undefined {
  if (validate.isString(input)) {
    if (validate.isEnvWindow) {
      return btoa(encodeURIComponent(input));
    } else {
      return Buffer.from(input, "utf-8").toString("base64");
    }
  }
}

function decode(base64: string): string | undefined {
  if (validate.isBase64(base64)) {
    if (validate.isEnvWindow) {
      return decodeURIComponent(atob(base64));
    } else {
      return Buffer.from(base64, "base64").toString("utf-8");
    }
  }
}

function encodeJSON(input: any): string | undefined {
  if (validate.isJSON(input)) {
    return encode(JSON.stringify(input));
  }
}

function decodeJSON(base64: string): any | undefined {
  const decoded = decode(base64);
  if (validate.isJSONString(decoded)) {
    return JSON.parse(decoded);
  }
}

export default {
  encode,
  decode,
  encodeJSON,
  encodeJson: encodeJSON,
  decodeJSON,
  decodeJson: decodeJSON,
};
