const simpul = require("../dist").default;
console.log(
  simpul.escaper("All of these should be escaped:  ^ $ * + ? . ( ) | { } [ ]"),
);
