const simpul = require("../dist");
// console.log(simpul);

// console.log({
//   test1,
//   test2,
//   test3,
//   test4,
//   test5,
//   test6,
//   test7,
//   test8,
//   test9,
//   test10,
//   test11,
//   test12,
//   test13,
// });

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
