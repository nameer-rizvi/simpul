declare function decode(jwt: string): string | undefined;
declare function decodeJSON(jwt: string): any;
declare const _default: {
    decode: typeof decode;
    decodeJSON: typeof decodeJSON;
};
export default _default;
