declare function encode(input: unknown): string | undefined;
declare function decode(input: unknown): string | undefined;
declare function encodeJSON(input: unknown): string | undefined;
declare function decodeJSON(input: unknown): any | undefined;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
    encodeJSON: typeof encodeJSON;
    encodeJson: typeof encodeJSON;
    decodeJSON: typeof decodeJSON;
    decodeJson: typeof decodeJSON;
};
export default _default;
