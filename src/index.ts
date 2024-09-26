import jwt from "./jwt";
import version from "./version";
import * as validate from "./validate";

interface Simpul {
  jwt: typeof jwt;
  version: typeof version;
  [key: string]: any;
}

const simpul: Simpul = {
  jwt,
  version,
  ...validate,
};

export default simpul;
