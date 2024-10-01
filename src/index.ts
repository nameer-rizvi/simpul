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
import support from "./support";
import timenvlog from "./timenvlog";
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
  support: typeof support;
  timenvlog: typeof timenvlog;
  trim: typeof trim;
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
  support,
  timenvlog,
  trim,
  ...validate,
};

export default simpul;
