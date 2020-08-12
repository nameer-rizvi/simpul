const { base64 } = require("./index");

module.exports = (validation, correctIndexes) =>
  [
    0,
    false,
    null,
    undefined,
    "",
    [],
    {},
    () => {},
    1,
    true,
    { a: "a" },
    "a",
    ["a"],
    new Date(),
    base64.encode("a"),
    "10",
    new RegExp(/ab+c/, "i"),
  ].every((value, index) => {
    const validationResult = validation(value);
    const isCorrectIndex = correctIndexes.includes(index);
    const pass =
      (validationResult === false && !isCorrectIndex) ||
      (validationResult === true && isCorrectIndex);
    !pass && console.log("Bad pass @ " + index.toString());
    return pass;
  });
