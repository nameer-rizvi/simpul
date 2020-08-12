const { isJSON, isStringValid } = require("./validations");
const { removeSpaces } = require("../string");

module.exports = {
  strict: (jsonOne, jsonTwo) =>
    isJSON(jsonOne) &&
    isJSON(jsonTwo) &&
    JSON.stringify(jsonOne) === JSON.stringify(jsonTwo),
  loose: (jsonOne, jsonTwo) => {
    const jsons = [jsonOne, jsonTwo];
    jsons.forEach((json, jsonIndex) => {
      jsons[jsonIndex] = isJSON(json) && JSON.stringify(json);
      isStringValid(jsons[jsonIndex]) &&
        (jsons[jsonIndex] = removeSpaces(jsons[jsonIndex].toLowerCase()));
    });
    return jsons[0] && jsons[1] && jsons[0] === jsons[1];
  },
};
