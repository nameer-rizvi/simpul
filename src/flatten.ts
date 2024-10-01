import validate from "./validate";

function flatten(
  object: Record<string, any> = {},
  delimiter: string = "_",
): Record<string, any> {
  const result: Record<string, any> = {};

  function recurse(obj: Record<string, any>, currentKey: string) {
    Object.keys(obj).forEach((key) => {
      const newKey = currentKey ? `${currentKey}${delimiter}${key}` : key;
      if (validate.isObject(obj[key])) {
        recurse(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    });
  }

  recurse(object, "");

  return result;
}

export default flatten;
