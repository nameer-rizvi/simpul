const {
  array,
  number,
  object,
  string,
  // misc...
  base64,
  clone,
  compareJSON,
  logger,
  isArray,
  isArrayValid,
  isBase64,
  isBoolean,
  isDate,
  isFunction,
  isJSON,
  isJSONString,
  isNumber,
  isObject,
  isObjectValid,
  isRegex,
  isString,
  isStringValid,
  areArrayValuesAllStrings,
  areObjectValuesAllStrings,
  areObjectValuesAllObjects,
} = require("./index");

const testValidation = require("./testValidation");

const stringValue = "test123";

const jsonValue = [{ test: "123" }, "testing..."];

const tests = {
  // array...
  arrayChangeIndex: () => {
    const copy = clone(jsonValue);
    array.changeIndex(copy, 0, 1);
    return copy[0] === jsonValue[1];
  },
  arrayReduceKeysToObject: () =>
    array.reduce.keysToObject(["key1", "key2"], (key) => key).key2 === "key2",
  arrayReduceMergeObjects: () => {
    const merge = array.reduce.mergeObjects([{ a: "a" }, { b: "b" }]);
    const result = { a: "a", b: "b" };
    return compareJSON.strict(merge, result);
  },
  arrayPropCounter: () =>
    array.reduce.propCounter([{ venue: "930" }, { venue: "930" }], "venue")[
      "930"
    ] === 2,
  arraySortByAlphabetKey: () =>
    array.sort.byAlphabetKey(
      [{ label: "book" }, { label: "apple" }],
      "label"
    )[0].label === "apple",
  arraySortByAlphabetDate: () =>
    array.sort
      .byDateKey(
        [{ date: new Date("1/2/2020") }, { date: new Date("1/1/2020") }],
        "date"
      )[0]
      .date.toString() === new Date("1/1/2020").toString(),
  // number...
  numberFinance: () => number.finance(198234.19234) === "$198,234.19",
  numberGeneralized: () => number.generalized("1923898") === "1.9m",
  // object...
  objectFlat: () => object.flat({ a: { b: { c: "hello" } } }).c === "hello",
  // string...
  stringCapitalize: () => string.capitalize("asdf") === "Asdf",
  stringClean: () => {
    const messyString =
      "   this.   as as asd asd   !    is  an    example   . of a   ,    CLEAN  string";
    return (
      string.clean(messyString) ===
      "This. As as asd asd! Is an example. Of a, CLEAN string"
    );
  },
  stringDiff: () => string.diff("asdf", " asdf aksjdf") === "  aksjdf",
  stringLengthChar: () => string.length.char("1234") === 4,
  stringLengthWords: () => string.length.words("1234 1234 1234") === 3,
  stringRemoveSpaces: () => string.removeSpaces(" asd   asd") === "asdasd",
  // misc...
  base64: () => {
    // string test
    const encodedStringValue = base64.encode(stringValue);
    const testBase64EncodedString = encodedStringValue === "dGVzdDEyMw==";
    const testBase64DecodedString =
      base64.decode(encodedStringValue) === stringValue;
    // json test
    const encodedJSONValue = base64.encodeJSON(jsonValue);
    const testBase64EncodedJSON =
      encodedJSONValue === "W3sidGVzdCI6IjEyMyJ9LCJ0ZXN0aW5nLi4uIl0=";
    const testBase64DecodedJSON =
      compareJSON.strict(base64.decodeJSON(encodedJSONValue)) ===
      compareJSON.strict(jsonValue);
    return (
      testBase64EncodedString &&
      testBase64DecodedString &&
      testBase64EncodedJSON &&
      testBase64DecodedJSON
    );
  },
  clone: () => {
    const arr = [1, 2, 3, 4];
    const copy = clone(arr);
    copy.forEach((i, index) => (copy[index] = "test"));
    return (
      arr.toString() === "1,2,3,4" && copy.toString() === "test,test,test,test"
    );
  },
  compareJSON: () => {
    const jsonValueCompare = [{ test: "1    23" }, "   Tes   ting..."];
    const testCompareJSONStrict = compareJSON.strict(
      jsonValue,
      jsonValueCompare
    );
    const testCompareJSONLoose = compareJSON.loose(jsonValue, jsonValueCompare);
    return !testCompareJSONStrict && testCompareJSONLoose;
  },
  isArray: () => testValidation(isArray, [5, 12]),
  isArrayValid: () => testValidation(isArrayValid, [12]),
  isBase64: () => testValidation(isBase64, [14]),
  isBoolean: () => testValidation(isBoolean, [1, 9]),
  isDate: () => testValidation(isDate, [13, 15]) && isDate("01/03/1900"),
  isFunction: () => testValidation(isFunction, [7]),
  isJSON: () =>
    testValidation(isJSON, [5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
  isJSONString: () => testValidation(isJSONString, []),
  isNumber: () => testValidation(isNumber, [0, 8, 15]),
  isObject: () => testValidation(isObject, [6, 10]),
  isObjectValid: () => testValidation(isObjectValid, [10]),
  isRegex: () => testValidation(isRegex, [16]),
  isString: () => testValidation(isString, [11, 14, 15]),
  isStringValid: () => testValidation(isStringValid, [11, 14, 15]),
  areArrayValuesAllStrings: () =>
    testValidation(areArrayValuesAllStrings, [12]),
  areObjectValuesAllStrings: () =>
    testValidation(areObjectValuesAllStrings, [10]),
  areObjectValuesAllObjects: () =>
    testValidation(areObjectValuesAllObjects, []),
  // capitalize: () => capitalize("asdf") === "Asdf",
  // cleanString: () => {
  //   const messyString =
  //     "   this.   as as asd asd   !    is  an    example   . of a   ,    CLEAN  string";
  //   return (
  //     cleanString(messyString) ===
  //     "This. As as asd asd! Is an example. Of a, CLEAN string"
  //   );
  // },
  // formattedTimestamp: () => isDate(formattedTimestamp()),
  // mysqlDate: () => isDate(mysqlDate()),
  // objectFlat: () => objectFlat({ a: { b: { c: "hello" } } }).c === "hello",
  // removeSpaces: () => removeSpaces("this is a string.") === "thisisastring.",
  // stringLength_char: () => stringLength.char("this is a string.") === 17,
  // stringLength_words: () => stringLength.words("this is a string.") === 4,
};

Object.keys(tests).forEach((test) => {
  const runTest = tests[test]();
  logger(Boolean(runTest) ? { s: test } : { e: test });
});
