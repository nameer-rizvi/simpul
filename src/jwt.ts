// Non-secure JWT-style payload encoder/decoder. Not a real JWT implementation.

function encode(input: any): string | undefined {
  try {
    return "." + Buffer.from(JSON.stringify(input), "utf-8").toString("base64");
  } catch {
    return;
  }
}

function decode(input: string): any {
  try {
    const payload = input.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
  } catch {
    return;
  }
}

export default { encode, decode, decodeJson: decode, decodeJSON: decode };
