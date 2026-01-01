import validate from "./validate";

// Shallow clone with deep recursion for objects/arrays.
function clone<T>(input: T): T {
  if (validate.isArray(input)) {
    const result = [];
    for (const item of input) result.push(clone(item));
    return result as T;
  }

  if (validate.isObject(input)) {
    const result: { [key: string]: any } = {};
    for (const key in input) result[key] = clone(input[key]);
    return result as T;
  }

  return input;
}

export default clone;
