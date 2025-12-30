import validate from "./validate";

function flatten(
  input: Record<string, unknown> = {},
  delimiter = ".",
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  const stack: Array<{ obj: Record<string, unknown>; prefix: string }> = [
    { obj: input, prefix: "" },
  ];

  while (stack.length) {
    const { obj, prefix } = stack.pop()!;

    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

      const value = obj[key];

      const newKey = prefix ? `${prefix}${delimiter}${key}` : key;

      if (validate.isObject(value)) {
        stack.push({ obj: value as Record<string, unknown>, prefix: newKey });
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
}

export default flatten;
