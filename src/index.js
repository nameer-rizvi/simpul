const array = require("./array");
const number = require("./number");
const object = require("./object");
const string = require("./string");
const time = require("./time");
const { validations, ...misc } = require("./misc");

module.exports = {
  array,
  number,
  object,
  string,
  time,
  ...misc,
  ...validations,
};
