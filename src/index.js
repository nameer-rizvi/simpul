const base64 = require("./base64");
const capitalize = require("./capitalize");
const changeArrayIndex = require("./changeArrayIndex");
const changeCase = require("./changeCase");
const clone = require("./clone");
const formattedTimestamp = require("./formattedTimestamp");
const generalizedNumber = require("./generalizedNumber");
const logti = require("./logti");
const objectFlat = require("./objectFlat");
const reduceKeysToObject = require("./reduceKeysToObject");
const reduceMergeObjects = require("./reduceMergeObjects");
const removeSpaces = require("./removeSpaces");
const sort = require("./sort");
const stringLength = require("./stringLength");
const validations = require("./validations");

module.exports = {
  base64,
  capitalize,
  changeArrayIndex,
  changeCase,
  clone,
  formattedTimestamp,
  generalizedNumber,
  logti,
  objectFlat,
  reduceKeysToObject,
  reduceMergeObjects,
  removeSpaces,
  sort,
  stringLength,
  ...validations,
};
