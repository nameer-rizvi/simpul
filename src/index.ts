import jwt from "./jwt";
import removePunctuation from "./removePunctuation";
import support from "./support";
import trim from "./trim";
import trimPunctuation from "./trimPunctuation";
import tryasync from "./tryasync";
import trycallback from "./trycallback";
import uid from "./uid";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import version from "./version";
import validate from "./validate";

interface Simpul {
  jwt: typeof jwt;
  removePunctuation: typeof removePunctuation;
  support: typeof support;
  trim: typeof trim;
  trimPunctuation: typeof trimPunctuation;
  tryasync: typeof tryasync;
  trycallback: typeof trycallback;
  uid: typeof uid;
  urlBase64ToUint8Array: typeof urlBase64ToUint8Array;
  version: typeof version;
  [key: string]: any;
}

const simpul: Simpul = {
  jwt,
  removePunctuation,
  support,
  trim,
  trimPunctuation,
  tryasync,
  trycallback,
  uid,
  urlBase64ToUint8Array,
  version,
  ...validate,
};

export default simpul;
