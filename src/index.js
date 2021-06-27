const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  clone: require("./clone"),
  dateformat: require("./dateformat"),
  escapeRegex: require("./escapeRegex"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
  mysql_timestamp: require("./mysql_timestamp"),
  removeNullValues: require("./removeNullValues"),
  removePunctuation: require("./removePunctuation"),
  stringLength: require("./stringLength"),
  timelog: require("./timelog"),
  trim: require("./trim"),
  trimPunctuation: require("./trimPunctuation"),
  ...require("./validations"),
};

module.exports = simpul;
