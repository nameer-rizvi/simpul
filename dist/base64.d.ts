declare function encode(string: string): string | undefined;
declare function decode(base64: string): string | undefined;
declare function encodeJSON(json: any): string | undefined;
declare function decodeJSON(base64: string): any | undefined;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
    encodeJSON: typeof encodeJSON;
    decodeJSON: typeof decodeJSON;
};
export default _default;
