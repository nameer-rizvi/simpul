const sanitized = require("sanitized");
const jsontxt = require("jsontxt");
//
const capitalize = require("./capitalize");
const changeArrayIndex = require("./changeArrayIndex");
const changeCase = require("./changeCase");
const clone = require("./clone");
const formattedTimestamp = require("./formattedTimestamp");
const getQueryParam = require("./getQueryParam");
const isValidObject = require("./isValidObject");
const logti = require("./logti");
const objectFlat = require("./objectFlat");
const reduceKeysToObject = require("./reduceKeysToObject");
const removeSpaces = require("./removeSpaces");
const sort = require("./sort");
const stringExists = require("./stringExists");
const stringLength = require("./stringLength");

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
  isValidObject,
  logti,
  objectFlat,
  reduceKeysToObject,
  removeSpaces,
  sort,
  stringExists,
  stringLength,
};
