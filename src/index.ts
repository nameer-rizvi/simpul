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
import jwt from "./jwt";
import math from "./math";
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
  jwt: typeof jwt;
  math: typeof math;
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
  jwt,
  math,
  trim,
  ...validate,
};

export default simpul;
