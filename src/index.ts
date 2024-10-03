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
import flatten from "./flatten";
import generalcount from "./generalcount";
import isEnv from "./isEnv";
import jwt from "./jwt";
import keychange from "./keychange";
import log from "./log";
import logPermutation from "./logPermutation";
import math from "./math";
import noop from "./noop";
import numberstring from "./numberstring";
import objectKeyGroup from "./objectKeyGroup";
import ordinalized from "./ordinalized";
import paginationProps from "./paginationProps";
import parseCommafiedNumber from "./parseCommafiedNumber";
import parsejson from "./parsejson";
import peaks from "./peaks";
import pricehistory from "./pricehistory";
import pricelimit from "./pricelimit";
import recursively from "./recursively";
import reduceobject from "./reduceobject";
import removeArrayItems from "./removeArrayItems";
import removeNullValues from "./removeNullValues";
import removePunctuation from "./removePunctuation";
import removeStrings from "./removeStrings";
import replaceStrings from "./replaceStrings";
import scale from "./scale";
import shuffle from "./shuffle";
import slug from "./slug";
import stringlength from "./stringlength";
import stringnumber from "./stringnumber";
import stringtest from "./stringtest";
import support from "./support";
import timenvlog from "./timenvlog";
import tokenize from "./tokenize";
import trim from "./trim";
import trimBoundary from "./trimBoundary";
import trimPunctuation from "./trimPunctuation";
import tryasync from "./tryasync";
import trycallback from "./trycallback";
import uid from "./uid";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import validate from "./validate";
import version from "./version";

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
  flatten: typeof flatten;
  generalcount: typeof generalcount;
  isEnv: typeof isEnv;
  jwt: typeof jwt;
  keychange: typeof keychange;
  log: typeof log;
  logPermutation: typeof logPermutation;
  math: typeof math;
  noop: typeof noop;
  numberstring: typeof numberstring;
  objectKeyGroup: typeof objectKeyGroup;
  ordinalized: typeof ordinalized;
  paginationProps: typeof paginationProps;
  parseCommafiedNumber: typeof parseCommafiedNumber;
  parsejson: typeof parsejson;
  peaks: typeof peaks;
  pricehistory: typeof pricehistory;
  pricelimit: typeof pricelimit;
  recursively: typeof recursively;
  reduceobject: typeof reduceobject;
  removeArrayItems: typeof removeArrayItems;
  removeNullValues: typeof removeNullValues;
  removePunctuation: typeof removePunctuation;
  removeStrings: typeof removeStrings;
  replaceStrings: typeof replaceStrings;
  scale: typeof scale;
  shuffle: typeof shuffle;
  slug: typeof slug;
  stringlength: typeof stringlength;
  stringnumber: typeof stringnumber;
  stringtest: typeof stringtest;
  support: typeof support;
  timenvlog: typeof timenvlog;
  tokenize: typeof tokenize;
  trim: typeof trim;
  trimBoundary: typeof trimBoundary;
  trimPunctuation: typeof trimPunctuation;
  tryasync: typeof tryasync;
  trycallback: typeof trycallback;
  uid: typeof uid;
  urlBase64ToUint8Array: typeof urlBase64ToUint8Array;
  version: typeof version;
  [key: string]: any;
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
  flatten,
  generalcount,
  isEnv,
  jwt,
  keychange,
  log,
  logPermutation,
  math,
  noop,
  numberstring,
  objectKeyGroup,
  ordinalized,
  paginationProps,
  parseCommafiedNumber,
  parsejson,
  peaks,
  pricehistory,
  pricelimit,
  recursively,
  reduceobject,
  removeArrayItems,
  removeNullValues,
  removePunctuation,
  removeStrings,
  replaceStrings,
  scale,
  shuffle,
  slug,
  stringlength,
  stringnumber,
  stringtest,
  support,
  timenvlog,
  tokenize,
  trim,
  trimBoundary,
  trimPunctuation,
  tryasync,
  trycallback,
  uid,
  urlBase64ToUint8Array,
  version,
  ...validate,
};

export = simpul;
