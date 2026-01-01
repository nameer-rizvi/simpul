import validate from "./validate";

function reduceObject(input: [string, any][] = []): Record<string, any> {
  if (!validate.isArrayNonEmpty(input)) return {};

  const result: Record<string, any> = {};

  for (const [key, value] of input) result[key] = value;

  return result;
}

export default reduceObject;
