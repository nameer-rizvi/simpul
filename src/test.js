const {
  base64,
  capitalize,
  changeArrayIndex,
  changeCase,
  clone,
  generalizedNumber,
  objectFlat,
  reduceKeysToObject,
  removeSpaces,
  sort,
  stringLength,
  isBoolean,
  isNumber,
  isArray,
  isString,
  isObject,
  isArrayValid,
  isStringValid,
  isObjectValid,
  areArrayValuesAllStrings,
  areObjectValuesAllStrings,
  areObjectValuesAllObjects,
} = require("./index");

// Untested: formattedTimestamp, getQueryParam, logti, projectdb, sort

const tests = {
  base64: () => {
    const string = "hello";
    return base64.decode(base64.encode(string)) === string;
  },
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
  generalizedNumber: () => generalizedNumber(1923898) === "1.9m",
  objectFlat: () => objectFlat({ a: { b: { c: "hello" } } }).c === "hello",
  reduceKeysToObject: () =>
    reduceKeysToObject(["key1", "key2"], (key) => key).key2 === "key2",
  removeSpaces: () => removeSpaces("this is a string.") === "thisisastring.",
  stringLength_char: () => stringLength.char("this is a string.") === 17,
  stringLength_words: () => stringLength.words("this is a string.") === 4,
  isBoolean: () => !isBoolean("true") && isBoolean(false),
  isNumber: () =>
    isNumber(0) && !isNumber({}) && !isNumber([]) && !isNumber(""),
  isArray: () => !isArray(0) && !isArray({}) && isArray([]) && !isArray(""),
  isString: () =>
    !isString(0) && !isString({}) && !isString([]) && isString("."),
  isObject: () =>
    !isObject(0) && isObject({}) && !isObject([]) && !isObject(""),
  isArrayValid: () => !isArrayValid([]) && isArrayValid([""]),
  isStringValid: () => !isStringValid(" ") && isStringValid("."),
  isObjectValid: () => !isObjectValid({}) && isObjectValid({ a: "" }),
  areArrayValuesAllStrings: () =>
    !areArrayValuesAllStrings([[], {}]) && areArrayValuesAllStrings([".", "."]),
  areObjectValuesAllStrings: () =>
    !areObjectValuesAllStrings({ a: ".", b: [] }) &&
    areObjectValuesAllStrings({ a: ".", b: "." }),
  areObjectValuesAllObjects: () =>
    !areObjectValuesAllObjects({ a: "", b: [] }) &&
    areObjectValuesAllObjects({ a: {}, b: {} }),
};

Object.keys(tests).forEach((test) => {
  const runTest = tests[test]();
  const pass = Boolean(runTest) ? "✅" : "❌";
  console.log(`${pass} ${test}.`);
});
