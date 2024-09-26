import jwt from "./jwt";
import * as validate from "./validate";

interface Simpul {
  jwt: typeof jwt;
  [key: string]: any;
}

const simpul: Simpul = {
  jwt,
  ...validate,
};

export default simpul;
