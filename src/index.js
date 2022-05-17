const simpul = {
  base64: require("./base64"),
  capitalize: require("./capitalize"),
  changeIndex: require("./changeIndex"),
  clone: require("./clone"),
  copyText: require("./copyText"),
  dateformat: require("./dateformat"),
  endsWithPunctuation: require("./endsWithPunctuation"),
  escapeRegex: require("./escapeRegex"),
  flatten: require("./flatten"),
  generalizedCount: require("./generalizedCount"),
  generateKey: require("./generateKey"),
  isEnv: require("./isEnv"),
  jwt: require("./jwt"),
  log: require("./log"),
  math: require("./math"),
  mysql_timestamp: require("./mysql_timestamp"),
  noop: require("./noop"),
  numberLabel: require("./numberLabel"),
  objectKeyGroup: require("./objectKeyGroup"),
  ordinalized: require("./ordinalized"),
  parseJSON: require("./parseJSON"),
  removeArrayItems: require("./removeArrayItems"),
  removeNullValues: require("./removeNullValues"),
  removePunctuation: require("./removePunctuation"),
  stringLength: require("./stringLength"),
  support: require("./support"),
  testString: require("./testString"),
  timenvlog: require("./timenvlog"),
  timeoutPromise: require("./timeoutPromise"),
  trim: require("./trim"),
  trimBoundary: require("./trimBoundary"),
  trimPunctuation: require("./trimPunctuation"),
  tryCallback: require("./tryCallback"),
  uniqueStrings: require("./uniqueStrings"),
  urlBase64ToUint8Array: require("./urlBase64ToUint8Array"),
  ...require("./validate"),
};

module.exports = simpul;
