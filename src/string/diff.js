module.exports = (stringA, stringB) => {
  firstOccurrence = stringB.indexOf(stringA);
  if (firstOccurrence === -1) {
    return null;
  } else {
    var stringALength = stringA.length;
    var newString;
    if (firstOccurrence === 0) {
      newString = stringB.substring(stringALength);
    } else {
      newString = stringB.substring(0, firstOccurrence);
      newString += stringB.substring(firstOccurrence + stringALength);
    }
    return newString;
  }
};
//
// [Ghost-Man] https://stackoverflow.com/questions/8024102/javascript-compare-strings-and-get-end-difference
//
// PREVIOUS:
//
// const { isStringValid } = require("../misc/validations");
//
// const indexOfDifference = (str1, str2) =>
//   str1 === str2
//     ? "INDEX_NOT_FOUND"
//     : (() => {
//         let i;
//         for (i = 0; i < str1.length && i < str2.length; ++i) {
//           if (str1.charAt(i) != str2.charAt(i)) {
//             break;
//           }
//         }
//         return i < str2.length || i < str1.length ? i : "INDEX_NOT_FOUND";
//       })();
//
// module.exports = (str1, str2) =>
//   !isStringValid(str1)
//     ? str2
//     : !isStringValid(str2)
//     ? str2
//     : !indexOfDifference(str1, str2) ||
//       indexOfDifference(str1, str2) === "INDEX_NOT_FOUND"
//     ? null
//     : str2.substring(indexOfDifference(str1, str2));
//
// // https://commons.apache.org/proper/commons-lang/javadocs/api-2.6/src-html/org/apache/commons/lang/StringUtils.html#line.6020
