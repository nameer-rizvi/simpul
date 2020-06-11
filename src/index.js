const base64 = require("./base64");
const capitalize = require("./capitalize");
const changeArrayIndex = require("./changeArrayIndex");
const changeCase = require("./changeCase");
const clone = require("./clone");
const formattedTimestamp = require("./formattedTimestamp");
const generalizedNumber = require("./generalizedNumber");
const logti = require("./logti");
const mysqlDate = require("./mysqlDate");
const objectFlat = require("./objectFlat");
const reduceKeysToObject = require("./reduceKeysToObject");
const reduceMergeObjects = require("./reduceMergeObjects");
const reducePropCounter = require("./reducePropCounter");
const removeSpaces = require("./removeSpaces");
const sort = require("./sort");
const stringDiff = require("./stringDiff");
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
  mysqlDate,
  objectFlat,
  reduceKeysToObject,
  reduceMergeObjects,
  reducePropCounter,
  removeSpaces,
  sort,
  stringDiff,
  stringLength,
  ...validations,
};
