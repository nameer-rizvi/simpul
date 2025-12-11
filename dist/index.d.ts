import abbreviationToNumber from "./abbreviationToNumber";
import applyValueToNumber from "./applyValueToNumber";
import base64 from "./base64";
import batchify from "./batchify";
import capitalize from "./capitalize";
import changecase from "./changecase";
import jwt from "./jwt";
import support from "./support";
interface Simpul {
    abbreviationToNumber: typeof abbreviationToNumber;
    applyValueToNumber: typeof applyValueToNumber;
    base64: typeof base64;
    batchify: typeof batchify;
    capitalize: typeof capitalize;
    changecase: typeof changecase;
    jwt: typeof jwt;
    support: typeof support;
    [key: string]: any;
}
declare const simpul: Simpul;
export = simpul;
