const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  clone: require("./clone"),
  copyText: require("./copyText"),
  dateformat: require("./dateformat"),
  escapeRegex: require("./escapeRegex"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
  generateKey: require("./generateKey"),
  generateNonce: require("./generateNonce"),
  math: require("./math"),
  mysql_timestamp: require("./mysql_timestamp"),
  objectKeyGroup: require("./objectKeyGroup"),
  parseJSON: require("./parseJSON"),
  removeArrayItems: require("./removeArrayItems"),
  removeNullValues: require("./removeNullValues"),
  removePunctuation: require("./removePunctuation"),
  stringLength: require("./stringLength"),
  support: require("./support"),
  timelog: require("./timelog"),
  trim: require("./trim"),
  trimBoundary: require("./trimBoundary"),
  trimPunctuation: require("./trimPunctuation"),
  tryCallback: require("./tryCallback"),
  urlBase64ToUint8Array: require("./urlBase64ToUint8Array"),
  ...require("./validations"),
};

module.exports = simpul;
