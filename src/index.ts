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
import generalcount from "./generalcount";
import jwt from "./jwt";
import math from "./math";
import support from "./support";
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
  generalcount: typeof generalcount;
  jwt: typeof jwt;
  math: typeof math;
  support: typeof support;
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
  generalcount,
  jwt,
  math,
  support,
  trim,
  ...validate,
};

export default simpul;
