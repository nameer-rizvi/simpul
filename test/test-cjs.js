const simpul = require("../dist");
// console.log(simpul);

const test1 = simpul.replaceStrings("hello world", [["world", "there"]]);
const test2 = simpul.replaceStrings("HELLO world", [["hello", "hi"]]);
const test3 = simpul.replaceStrings("foo bar baz", [
  ["bar", "BAR"],
  ["baz", "BAZ"],
]);
const test4 = simpul.replaceStrings("foobar", [
  ["foo", "FOO"],
  ["bar", "BAR"],
]);
const test5 = simpul.replaceStrings("nothing to change", []);
const test6 = simpul.replaceStrings("special.*chars?", [
  [/special\.\*/, "replaced"],
]);
const test7 = simpul.replaceStrings("repeat repeat repeat", [
  ["repeat", "once"],
]);
const test8 = simpul.replaceStrings("case Sensitive", [
  ["sensitive", "INSENSITIVE"],
]);
const test9 = simpul.replaceStrings("123-456-789", [
  ["-", ":"],
  ["456", "X"],
]);
const test10 = simpul.replaceStrings(undefined, [["test", "x"]]);
const test11 = simpul.replaceStrings("abc123XYZ", [
  [/123/, "456"],
  ["XYZ", "END"],
]);
const test12 = simpul.replaceStrings("escape.*this?", [
  ["escape.*", "done"],
  ["?", "!"],
]);
const test13 = simpul.replaceStrings("mixedCASE", [
  [/mixed/i, "MIXED"],
  ["case", "CASE"],
]);

console.log({
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
});

const isKeysSorted =
  JSON.stringify(Object.keys(simpul).map((i) => i.toLowerCase())) ===
  JSON.stringify(
    Object.keys(simpul)
      .map((i) => i.toLowerCase())
      .sort(),
  );

if (!isKeysSorted) {
  console.log(Object.keys(simpul).sort());
}
