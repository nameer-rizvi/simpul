const simpul = require("../dist");
console.log(simpul);

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
