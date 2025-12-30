import validate from "./validate";

interface GroupedObject {
  keys: string[];
  keysWithoutId: string[];
  extracted: Record<string, unknown>;
  extractedWithoutId: Record<string, unknown>;
}

function objectKeyGroup(
  input: Record<string, unknown> = {},
  keyStartsWith?: string,
  keyEndsWith?: string,
): GroupedObject {
  const keys: string[] = [];

  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) continue;
    const value = input[key];
    const startsWith = keyStartsWith ? key.startsWith(keyStartsWith) : false;
    const endsWith = keyEndsWith ? key.endsWith(keyEndsWith) : false;
    if ((startsWith || endsWith) && validate.isValid(value)) keys.push(key);
  }

  const extracted: Record<string, unknown> = {};

  const keysWithoutId: string[] = [];

  const extractedWithoutId: Record<string, unknown> = {};

  for (const key of keys) {
    extracted[key] = input[key];
    const stripped = keyStartsWith
      ? key.replace(keyStartsWith, "")
      : keyEndsWith
      ? key.replace(keyEndsWith, "")
      : key;
    keysWithoutId.push(stripped);
    extractedWithoutId[stripped] = input[key];
  }

  return { keys, keysWithoutId, extracted, extractedWithoutId };
}

export default objectKeyGroup;
