const simpul = require("../dist");
// console.log(simpul);

const test1 = simpul.numberstring(1234.56);

const test2 = simpul.numberstring(1234.56, ["$"]);

const test3 = simpul.numberstring(1234.56, ["#"]);

const test4 = simpul.numberstring(1234.56, ["%"]);

const test5 = simpul.numberstring(2.5, ["x"]);

const test6 = simpul.numberstring(1234.56, ["+", "%"]);

const test7 = simpul.numberstring(-1234.56, ["+", "$"]);

const test8 = simpul.numberstring(1234.0, [".-"]);

const test9 = simpul.numberstring(1234, [".+"]);

// Edge cases
const test10 = simpul.numberstring(0, ["$"]);
const test11 = simpul.numberstring(-0.25, ["%"]);
const test12 = simpul.numberstring(1000, ["#", ".+"]);

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
});

const isKeysSorted =
  JSON.stringify(Object.keys(simpul)) ===
  JSON.stringify(Object.keys(simpul).sort());

if (!isKeysSorted) {
  console.log(Object.keys(simpul).sort());
}
