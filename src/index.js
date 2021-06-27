const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  cleanSpace: require("./cleanSpace"),
  clone: require("./clone"),
  dateformat: require("./dateformat"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
  mysql_timestamp: require("./mysql_timestamp"),
  removeNullValues: require("./removeNullValues"),
  removePunctuation: require("./removePunctuation"),
  stringLength: require("./stringLength"),
  timelog: require("./timelog"),
  ...require("./validations"),
};

module.exports = simpul;
