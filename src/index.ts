import jwt from "./jwt";
import support from "./support";
import tryasync from "./tryasync";
import trycallback from "./trycallback";
import uid from "./uid";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import version from "./version";
import validate from "./validate";

interface Simpul {
  jwt: typeof jwt;
  support: typeof support;
  tryasync: typeof tryasync;
  trycallback: typeof trycallback;
  uid: typeof uid;
  urlBase64ToUint8Array: typeof urlBase64ToUint8Array;
  version: typeof version;
  [key: string]: any;
}

const simpul: Simpul = {
  jwt,
  support,
  tryasync,
  trycallback,
  uid,
  urlBase64ToUint8Array,
  version,
  ...validate,
};

export default simpul;
