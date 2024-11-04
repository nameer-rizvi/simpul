// shallow clone.
function clone<T>(json: T): T {
  if (json === null || typeof json !== "object") return json;

  if (Array.isArray(json)) return [...json] as T;

  const result: { [key: string]: any } = {};

  for (const key in json) {
    if (Object.prototype.hasOwnProperty.call(json, key)) {
      result[key] = clone(json[key]);
    }
  }

  return result as T;
}

export default clone;
