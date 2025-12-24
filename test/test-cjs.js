const simpul = require("../dist");
console.log(simpul);

const isKeysSorted =
  JSON.stringify(Object.keys(simpul)) ===
  JSON.stringify(Object.keys(simpul).sort());

if (!isKeysSorted) {
  console.log(Object.keys(simpul).sort());
}
