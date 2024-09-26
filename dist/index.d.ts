import jwt from "./jwt";
import version from "./version";
interface Simpul {
    jwt: typeof jwt;
    version: typeof version;
    [key: string]: any;
}
declare const simpul: Simpul;
export default simpul;
