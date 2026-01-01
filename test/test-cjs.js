const simpul = require("../dist");
// console.log(simpul);

const test1 = simpul.clone(42);
const test2 = simpul.clone("hello");
const test3 = simpul.clone(true);
const test4 = simpul.clone([1, 2, 3]);
const test5 = simpul.clone(["a", ["b", "c"], "d"]);
const test6 = simpul.clone({ a: 1, b: 2 });
const test7 = simpul.clone({ a: { b: { c: 3 } }, d: 4 });
const test8 = simpul.clone([]);
const test9 = simpul.clone({});
const test10 = simpul.clone([{ x: 1 }, { y: 2 }]);
const test11 = simpul.clone({ arr: [1, 2], obj: { a: "b" } });

console.log({
  // test1,
  // test2,
  // test3,
  // test4,
  // test5,
  // test6,
  // test7,
  // test8,
  // test9,
  // test10,
  // test11,
  // test12,
  // test13,
  // test14,
  // test15,
  // test16,
  // test17,
  // test18,
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
