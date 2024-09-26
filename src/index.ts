import jwt from "./jwt";

interface Simpul {
  jwt: typeof jwt;
}

const simpul: Simpul = {
  jwt,
};

export default simpul;
