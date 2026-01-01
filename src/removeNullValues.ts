import validate from "./validate";

function removeNullValues<T extends Record<string, any>>(
  input: T = {} as T,
): Partial<T> {
  if (!validate.isObject(input)) return {};

  const result: Partial<T> = {};

  for (const [key, value] of Object.entries(input)) {
    if (value !== null && value !== undefined) result[key as keyof T] = value;
  }

  return result;
}

export default removeNullValues;
