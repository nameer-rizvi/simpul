import abbreviationToNumber from "./abbreviationToNumber";
import applyValueToNumber from "./applyValueToNumber";
import base64 from "./base64";
import batchify from "./batchify";
import capitalize from "./capitalize";
import changecase from "./changecase";
import changeindex from "./changeindex";
import cleanstring from "./cleanstring";
import clone from "./clone";
import clonedeep from "./clonedeep";
import compare from "./compare";
import copytext from "./copytext";
import countlabel from "./countlabel";
import date from "./date";
import datestring from "./datestring";
import delay from "./delay";
import delimiter from "./delimiter";
import delimitersplit from "./delimitersplit";
import endswith from "./endswith";
import escaper from "./escaper";
import evaluateSeries from "./evaluateSeries";
import flatten from "./flatten";
import generalcount from "./generalcount";
import jwt from "./jwt";
import keychange from "./keychange";
import listify from "./listify";
import logProgress from "./logProgress";
import math from "./math";
import noop from "./noop";
import numberstring from "./numberstring";
import objectKeyGroup from "./objectKeyGroup";
import ordinalized from "./ordinalized";
import paginationProps from "./paginationProps";
import parseCommafiedNumber from "./parseCommafiedNumber";
import parsejson from "./parsejson";
import recursively from "./recursively";
import trim from "./trim";
import validate from "./validate";

interface Simpul {
  abbreviationToNumber: typeof abbreviationToNumber;
  applyValueToNumber: typeof applyValueToNumber;
  base64: typeof base64;
  batchify: typeof batchify;
  capitalize: typeof capitalize;
  changecase: typeof changecase;
  changeindex: typeof changeindex;
  cleanstring: typeof cleanstring;
  clone: typeof clone;
  clonedeep: typeof clonedeep;
  compare: typeof compare;
  copytext: typeof copytext;
  countlabel: typeof countlabel;
  date: typeof date;
  datestring: typeof datestring;
  delay: typeof delay;
  delimiter: typeof delimiter;
  delimitersplit: typeof delimitersplit;
  endswith: typeof endswith;
  escaper: typeof escaper;
  evaluateSeries: typeof evaluateSeries;
  flatten: typeof flatten;
  generalcount: typeof generalcount;
  isArray: typeof validate.isArray;
  isArrayNonEmpty: typeof validate.isArrayNonEmpty;
  isArrayOrString: typeof validate.isArrayOrString;
  isBase64: typeof validate.isBase64;
  isBoolean: typeof validate.isBoolean;
  isBooleanAny: typeof validate.isBooleanAny;
  isBooleanNumber: typeof validate.isBooleanNumber;
  isBooleanString: typeof validate.isBooleanString;
  isCreditCardNumber: typeof validate.isCreditCardNumber;
  isDate: typeof validate.isDate;
  isEmail: typeof validate.isEmail;
  isEnvBrowser: typeof validate.isEnvBrowser;
  isEnvDevelopment: typeof validate.isEnvDevelopment;
  isEnvDocument: typeof validate.isEnvDocument;
  isEnvLive: typeof validate.isEnvLive;
  isEnvLocalhost: typeof validate.isEnvLocalhost;
  isEnvNode: typeof validate.isEnvNode;
  isEnvNotificationGranted: typeof validate.isEnvNotificationGranted;
  isEnvProduction: typeof validate.isEnvProduction;
  isEnvServiceWorker: typeof validate.isEnvServiceWorker;
  isEnvStaging: typeof validate.isEnvStaging;
  isEnvTest: typeof validate.isEnvTest;
  isEnvWindow: typeof validate.isEnvWindow;
  isEnvWindowProperty: typeof validate.isEnvWindowProperty;
  isEnvWorker: typeof validate.isEnvWorker;
  isError: typeof validate.isError;
  isFunction: typeof validate.isFunction;
  isHTTP: typeof validate.isHTTP;
  isJSON: typeof validate.isJSON;
  isJSONString: typeof validate.isJSONString;
  isJWT: typeof validate.isJWT;
  isModule: typeof validate.isModule;
  isNumber: typeof validate.isNumber;
  isNumberString: typeof validate.isNumberString;
  isNumberValid: typeof validate.isNumberValid;
  isNumeric: typeof validate.isNumeric;
  isObject: typeof validate.isObject;
  isObjectNonEmpty: typeof validate.isObjectNonEmpty;
  isPhoneNumber: typeof validate.isPhoneNumber;
  isRegex: typeof validate.isRegex;
  isString: typeof validate.isString;
  isStringNonEmpty: typeof validate.isStringNonEmpty;
  isStringOrArray: typeof validate.isStringOrArray;
  isStringSafe: typeof validate.isStringSafe;
  isURL: typeof validate.isURL;
  isValid: typeof validate.isValid;
  jwt: typeof jwt;
  keychange: typeof keychange;
  listify: typeof listify;
  logProgress: typeof logProgress;
  math: typeof math;
  noop: typeof noop;
  numberstring: typeof numberstring;
  objectKeyGroup: typeof objectKeyGroup;
  ordinalized: typeof ordinalized;
  paginationProps: typeof paginationProps;
  parseCommafiedNumber: typeof parseCommafiedNumber;
  parsejson: typeof parsejson;
  recursively: typeof recursively;
  trim: typeof trim;
}

const simpul: Simpul = {
  abbreviationToNumber,
  applyValueToNumber,
  base64,
  batchify,
  capitalize,
  changecase,
  changeindex,
  cleanstring,
  clone,
  clonedeep,
  compare,
  copytext,
  countlabel,
  date,
  datestring,
  delay,
  delimiter,
  delimitersplit,
  endswith,
  escaper,
  evaluateSeries,
  flatten,
  generalcount,
  ...validate, // "is.."
  jwt,
  keychange,
  listify,
  logProgress,
  math,
  noop,
  numberstring,
  objectKeyGroup,
  ordinalized,
  paginationProps,
  parseCommafiedNumber,
  parsejson,
  recursively,
  trim,
};

export = simpul;
