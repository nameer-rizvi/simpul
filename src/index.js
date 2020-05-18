const sanitized = require("sanitized");
const jsontxt = require("jsontxt");
//
const capitalize = require("./capitalize");
const changeArrayIndex = require("./changeArrayIndex");
const changeCase = require("./changeCase");
const clone = require("./clone");
const formattedTimestamp = require("./formattedTimestamp");
const getQueryParam = require("./getQueryParam");
const logti = require("./logti");
const objectFlat = require("./objectFlat");
const reduceKeysToObject = require("./reduceKeysToObject");
const reduceMergeObjects = require("./reduceMergeObjects");
const removeSpaces = require("./removeSpaces");
const sort = require("./sort");
const stringLength = require("./stringLength");
const validations = require("./validations");

module.exports = {
  sanitized,
  jsontxt,
  //
  capitalize,
  changeArrayIndex,
  changeCase,
  clone,
  formattedTimestamp,
  getQueryParam,
  logti,
  objectFlat,
  reduceKeysToObject,
  reduceMergeObjects,
  removeSpaces,
  sort,
  stringLength,
  ...validations,
};
