import jwt from "./jwt";
interface Simpul {
    jwt: typeof jwt;
    [key: string]: any;
}
declare const simpul: Simpul;
export default simpul;
