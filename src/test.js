const {
  capitalize,
  changeArrayIndex,
  changeCase,
  clone,
  isValidObject,
  objectFlat,
  reduceKeysToObject,
  removeSpaces,
  sort,
  stringExists,
  stringLength,
} = require("./index");

// Untested: formattedTimestamp, getQueryParam, logti, projectdb, sort

const tests = {
  capitalize: () => capitalize("capitalize this...") === "Capitalize this...",
  changeArrayIndex: () =>
    changeArrayIndex([1, 2, 3, 4], 1, 3).toString() === "1,3,4,2",
  changeCase_camelToSnake: () =>
    changeCase.camelToSnake("camelToSnake") === "camel_to_snake",
  changeCase_snakeToCamel: () =>
    changeCase.snakeToCamel("snake_to_camel") === "snakeToCamel",
  changeCase_camelCase: () =>
    changeCase.camelCase("camel case") === "camelCase",
  changeCase_unCamelCase: () =>
    changeCase.unCamelCase("camelCase") === "Camel Case",
  clone: () => {
    const original = [1, 2, 3, 4];
    const copy = clone(original);
    copy.forEach((i, index) => (copy[index] = "test"));
    return (
      original.toString() === "1,2,3,4" &&
      copy.toString() === "test,test,test,test"
    );
  },
  isValidObject: () => isValidObject({}) === false,
  objectFlat: () => objectFlat({ a: { b: { c: "hello" } } }).c === "hello",
  reduceKeysToObject: () =>
    reduceKeysToObject(["key1", "key2"], (key) => key).key2 === "key2",
  removeSpaces: () => removeSpaces("this is a string.") === "thisisastring.",
  stringExists: () => !Boolean(stringExists(" ")) && Boolean(stringExists("a")),
  stringLength_char: () => stringLength.char("this is a string.") === 17,
  stringLength_words: () => stringLength.words("this is a string.") === 4,
};

Object.keys(tests).forEach((test) => {
  const runTest = tests[test]();
  const pass = Boolean(runTest) ? "✅" : "❌";
  console.log(`${pass} ${test}.`);
});
