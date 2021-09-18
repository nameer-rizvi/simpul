const { isArray, isObject } = require("./validations");

function dotpathGenerate(json, prepend = "") {
  const paths = [];

  const delimiter = ".";

  if (isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      let item = json[i];
      let index = i.toString();
      let path = prepend ? [prepend, index].join(delimiter) : index;
      if (isArray(item) || isObject(item)) {
        let subpath = dotpathGenerate(item, path);
        paths.push(subpath);
      } else paths.push(path);
    }
  } else if (isObject(json)) {
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      let item = json[keys[i]];
      let key = keys[i];
      let path = prepend ? [prepend, key].join(delimiter) : key;
      if (isArray(item) || isObject(item)) {
        let subpath = dotpathGenerate(item, path);
        paths.push(subpath);
      } else paths.push(path);
    }
  }

  return paths.flat();
}

module.exports = dotpathGenerate;
