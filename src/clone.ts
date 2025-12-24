import validate from "./validate";

// Shallow clone with deep recursion for objects/arrays.
function clone<T>(input: T): T {
  if (validate.isArray(input)) {
    return input.map(clone) as unknown as T;
  } else if (validate.isObject(input)) {
    const result: { [key: string]: any } = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        result[key] = clone((input as any)[key]);
      }
    }
    return result as T;
  } else {
    return input;
  }
}

export default clone;
