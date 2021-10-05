const { isNumber, isBoolean } = require("./validations");

function objectKeyGroup({ object = {}, keyStartsWith = "", keyEndsWith = "" }) {
  const keys = Object.keys(object).filter((key) => {
    const isKeyMatch = keyStartsWith
      ? key.startsWith(keyStartsWith)
      : keyEndsWith
      ? key.endsWith(keyEndsWith)
      : false;

    const keyHasValue =
      object[key] || isNumber(object[key]) || isBoolean(object[key]);

    return isKeyMatch && keyHasValue;
  });

  const extracted = keys.reduce(
    (reducer, key) => ({ ...reducer, [key]: object[key] }),
    {}
  );

  const keysWithoutId = keys.map((key) =>
    key.replace(keyStartsWith || keyEndsWith, "")
  );

  const extractedWithoutId = keysWithoutId.reduce(
    (reducer, keyWithoutId, index) => ({
      ...reducer,
      [keyWithoutId]: object[keys[index]],
    }),
    {}
  );

  return { keys, keysWithoutId, extracted, extractedWithoutId };
}

module.exports = objectKeyGroup;
