import validate from "./validate";

function encode(input: unknown): string | undefined {
  if (validate.isString(input)) {
    if (validate.isEnvWindow) {
      return btoa(encodeURIComponent(input));
    } else {
      return Buffer.from(input, "utf-8").toString("base64");
    }
  }
}

function decode(input: unknown): string | undefined {
  if (validate.isBase64(input)) {
    if (validate.isEnvWindow) {
      return decodeURIComponent(atob(input));
    } else {
      return Buffer.from(input, "base64").toString("utf-8");
    }
  }
}

function encodeJSON(input: unknown): string | undefined {
  if (validate.isJSON(input)) {
    return encode(JSON.stringify(input));
  }
}

function decodeJSON(input: unknown): any | undefined {
  const decoded = decode(input);
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
