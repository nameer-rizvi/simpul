const { isStringValid } = require("./validations");

const indexOfDifference = (str1, str2) =>
  str1 === str2
    ? "INDEX_NOT_FOUND"
    : (() => {
        let i;
        for (i = 0; i < str1.length && i < str2.length; ++i) {
          if (str1.charAt(i) != str2.charAt(i)) {
            break;
          }
        }
        return i < str2.length || i < str1.length ? i : "INDEX_NOT_FOUND";
      })();

module.exports = (str1, str2) =>
  !isStringValid(str1)
    ? str2
    : !isStringValid(str2)
    ? str2
    : !indexOfDifference(str1, str2) ||
      indexOfDifference(str1, str2) === "INDEX_NOT_FOUND"
    ? null
    : str2.substring(indexOfDifference(str1, str2));

// https://commons.apache.org/proper/commons-lang/javadocs/api-2.6/src-html/org/apache/commons/lang/StringUtils.html#line.6020
