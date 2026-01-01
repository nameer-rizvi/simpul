import validate from "./validate";

function listify(...inputs: unknown[]): string[] {
  const list: string[] = [];

  for (const input of inputs) {
    const parts = validate.isString(input)
      ? input.split(",")
      : validate.isArray(input)
      ? listify(...input)
      : [];

    for (const part of parts) {
      if (validate.isString(part)) {
        const v = part.trim();
        if (v) list.push(v);
      }
    }
  }

  return list;
}

export default listify;
