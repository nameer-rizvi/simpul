import validate from "./validate";

function encode(value: string): string | undefined {
  if (!validate.isString(value)) return;
  return Buffer.from(value).toString("base64");
}

function decode(base64: string): string | undefined {
  if (!validate.isBase64(base64)) return;
  return Buffer.from(base64, "base64").toString();
}

function encodeJSON(json: object): string | undefined {
  if (!validate.isJSON(json)) return;
  return Buffer.from(JSON.stringify(json)).toString("base64");
}

function decodeJSON(base64: string): any | undefined {
  if (!validate.isBase64(base64)) return;
  return JSON.parse(Buffer.from(base64, "base64").toString());
}

export default { encode, decode, encodeJSON, decodeJSON };
