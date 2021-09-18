const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  clone: require("./clone"),
  dateformat: require("./dateformat"),
  dotPath: {
    generate: require("./dotPaths"),
    extract: require("./dotExtraction"),
  },
  escapeRegex: require("./escapeRegex"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
  jsondiffs: require("./jsondiffs"),
  mysql_timestamp: require("./mysql_timestamp"),
  removeNullValues: require("./removeNullValues"),
  removePunctuation: require("./removePunctuation"),
  stringLength: require("./stringLength"),
  timelog: require("./timelog"),
  trim: require("./trim"),
  trimBoundary: require("./trimBoundary"),
  trimPunctuation: require("./trimPunctuation"),
  urlBase64ToUint8Array: require("./urlBase64ToUint8Array"),
  ...require("./validations"),
};

module.exports = simpul;
