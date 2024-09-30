import abbreviationToNumber from "./abbreviationToNumber";
import applyValueToNumber from "./applyValueToNumber";
import base64 from "./base64";
import jwt from "./jwt";
interface Simpul {
    abbreviationToNumber: typeof abbreviationToNumber;
    applyValueToNumber: typeof applyValueToNumber;
    base64: typeof base64;
    jwt: typeof jwt;
    [key: string]: any;
}
declare const simpul: Simpul;
export default simpul;
