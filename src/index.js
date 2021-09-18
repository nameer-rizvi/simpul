const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  clone: require("./clone"),
  dateformat: require("./dateformat"),
  dotpath: {
    diffs: require("./dotpath.diffs"),
    generate: require("./dotpath.generate"),
    extract: require("./dotpath.extract"),
  },
  escapeRegex: require("./escapeRegex"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
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
