import validate from "./validate";

interface GroupedObject {
  keys: string[];
  keysWithoutId: string[];
  extracted: Record<string, any>;
  extractedWithoutId: Record<string, any>;
}

function objectKeyGroup(
  object: Record<string, any> = {},
  keyStartsWith?: string,
  keyEndsWith?: string,
): GroupedObject {
  const keys = Object.keys(object).filter((key) => {
    const startsWith = keyStartsWith && key.startsWith(keyStartsWith);
    const endsWith = keyEndsWith && key.endsWith(keyEndsWith);
    const isValid = validate.isValid(object[key]);
    return (startsWith || endsWith) && isValid;
  });

  const extracted = keys.reduce((r, k) => {
    return { ...r, [k]: object[k] };
  }, {});

  const keysWithoutId = keys.map((k) => {
    return k.replace(keyStartsWith || keyEndsWith || "", "");
  });

  const extractedWithoutId = keysWithoutId.reduce((r, k, i) => {
    return { ...r, [k]: object[keys[i]] };
  }, {});

  return { keys, keysWithoutId, extracted, extractedWithoutId };
}

export default objectKeyGroup;
