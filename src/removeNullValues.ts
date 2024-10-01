import validate from "./validate";

function removeNullValues<T extends Record<string, any>>(
  object: T = {} as T,
): Partial<T> {
  const clean: Partial<T> = {};

  for (const key of Object.keys(object)) {
    const value = object[key];
    if (validate.isValid(value)) {
      clean[key as keyof T] = value;
    }
  }

  return clean;
}

export default removeNullValues;
