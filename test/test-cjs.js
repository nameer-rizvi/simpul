const simpul = require("../dist");
// console.log(simpul);

// Basic boundary trimming
const test1 = simpul.trimBoundary('"Hello"'); // "Hello"
const test2 = simpul.trimBoundary("'Hello'"); // "Hello"
const test3 = simpul.trimBoundary("[Hello]"); // "Hello]" (only trims start if end doesn't match boundary)
const test4 = simpul.trimBoundary("[Hello]"); // "[Hello" (only trims end if start doesn't match boundary)
const test5 = simpul.trimBoundary("(Hello)"); // "Hello)"
const test6 = simpul.trimBoundary("(Hello)"); // "(Hello"

// Default boundary (first character)
const test7 = simpul.trimBoundary('"Hello"'); // "Hello"
const test8 = simpul.trimBoundary("'Hello'"); // "Hello"
const test9 = simpul.trimBoundary("[Hello]"); // "Hello"

// With delimiter trimming inside
const test10 = simpul.trimBoundary('"  Hello  "', '"', " "); // "Hello"
const test11 = simpul.trimBoundary("'  Hello World  '", "'", " "); // "Hello World"

// Empty or invalid inputs
const test12 = simpul.trimBoundary(""); // undefined
const test13 = simpul.trimBoundary("   "); // undefined
const test14 = simpul.trimBoundary(null); // undefined
const test15 = simpul.trimBoundary(undefined); // undefined

// Complex string with symbols
const test16 = simpul.trimBoundary('"$$Special$$"', '"', "$"); // "Special"
const test17 = simpul.trimBoundary("$$Special$$", "$"); // "Special"

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
  test14,
  test15,
  test16,
  test17,
  // test18,
  // test19,
  // test20,
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
