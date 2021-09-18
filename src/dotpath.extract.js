const { isString, isArray, isObject } = require("./validations");

const extractor = (json, extract) =>
  extract.split(".").reduce((o, i) => o && o[i], json);

function dotpathExtract(json, extract) {
  if (isString(extract)) return extractor(json, extract);

  if (isArray(extract)) {
    const extracted = [];
    for (let i = 0; i < extract.length; i++) {
      extracted.push(dotpathExtract(json, extract[i]));
    }
    return extracted;
  }

  if (isObject(extract)) {
    const extracted = {};
    const keys = Object.keys(extract);
    for (let i = 0; i < keys.length; i++) {
      extracted[keys[i]] = dotpathExtract(json, extract[keys[i]]);
    }
    return extracted;
  }
}

module.exports = dotpathExtract;
