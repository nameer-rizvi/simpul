declare function encode(input: string): string | undefined;
declare function decode(input: string): string | undefined;
declare function encodeJSON(input: any): string | undefined;
declare function decodeJSON(input: string): any | undefined;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
    encodeJSON: typeof encodeJSON;
    encodeJson: typeof encodeJSON;
    decodeJSON: typeof decodeJSON;
    decodeJson: typeof decodeJSON;
};
export default _default;
