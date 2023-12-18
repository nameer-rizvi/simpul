const validate = require("./validate");

function objectKeyGroup(object = {}, keyStartsWith, keyEndsWith) {
  const keys = Object.keys(object).filter((key) => {
    const startsWith = keyStartsWith && key.startsWith(keyStartsWith);
    const endsWith = keyEndsWith && key.endsWith(keyEndsWith);
    const isValid = validate.isValid(object[key]);
    return (startsWith || endsWith) && isValid;
  });

  const extracted = keys.reduce((reducer, key) => {
    return { ...reducer, [key]: object[key] };
  }, {});

  const keysWithoutId = keys.map((key) => {
    return key.replace(keyStartsWith || keyEndsWith, "");
  });

  const extractedWithoutId = keysWithoutId.reduce(
    (reducer, keyWithoutId, index) => {
      return { ...reducer, [keyWithoutId]: object[keys[index]] };
    },
    {},
  );

  return { keys, keysWithoutId, extracted, extractedWithoutId };
}

module.exports = objectKeyGroup;
