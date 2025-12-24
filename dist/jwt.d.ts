declare function encode(json: any): string | undefined;
declare function decode(token: string): any;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
    decodeJson: typeof decode;
    decodeJSON: typeof decode;
};
export default _default;
