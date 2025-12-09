import jwt from "./jwt";
import support from "./support";
interface Simpul {
    jwt: typeof jwt;
    support: typeof support;
    [key: string]: any;
}
declare const simpul: Simpul;
export = simpul;
