declare function decode(jwt: string): string | undefined;
declare function decodeJSON(jwt: string): unknown;
declare const _default: {
    decode: typeof decode;
    decodeJSON: typeof decodeJSON;
};
export default _default;
