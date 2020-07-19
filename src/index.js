const base64 = require("./base64");
const capitalize = require("./capitalize");
const changeArrayIndex = require("./changeArrayIndex");
const changeCase = require("./changeCase");
const cleanString = require("./cleanString");
const clone = require("./clone");
const formattedTimestamp = require("./formattedTimestamp");
const generalizedNumber = require("./generalizedNumber");
const logger = require("./logger");
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
  cleanString,
  clone,
  formattedTimestamp,
  generalizedNumber,
  logger,
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
