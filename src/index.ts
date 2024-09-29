import changecase from "./changecase";
import cleanstring from "./cleanstring";
import clonedeep from "./clonedeep";
import datestring from "./datestring";
import jwt from "./jwt";
import removePunctuation from "./removePunctuation";
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
  changecase: typeof changecase;
  cleanstring: typeof cleanstring;
  clonedeep: typeof clonedeep;
  datestring: typeof datestring;
  jwt: typeof jwt;
  removePunctuation: typeof removePunctuation;
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
  changecase,
  cleanstring,
  clonedeep,
  datestring,
  jwt,
  removePunctuation,
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

export default simpul;
