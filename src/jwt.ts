// Non-secure JWT-style payload encoder/decoder. Not a real JWT implementation.

function encode(json: any): string | undefined {
  try {
    return "." + Buffer.from(JSON.stringify(json), "utf-8").toString("base64");
  } catch {
    return;
  }
}

function decode(token: string): any {
  try {
    const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
  } catch {
    return;
  }
}

export default { encode, decode, decodeJson: decode, decodeJSON: decode };
