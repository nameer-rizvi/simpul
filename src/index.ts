import jwt from "./jwt";
import support from "./support";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import version from "./version";
import validate from "./validate";

interface Simpul {
  jwt: typeof jwt;
  support: typeof support;
  urlBase64ToUint8Array: typeof urlBase64ToUint8Array;
  version: typeof version;
  [key: string]: any;
}

const simpul: Simpul = {
  jwt,
  support,
  urlBase64ToUint8Array,
  version,
  ...validate,
};

export default simpul;
