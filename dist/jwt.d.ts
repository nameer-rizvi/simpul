declare function encode(input: any): string | undefined;
declare function decode(input: string): any;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
    decodeJson: typeof decode;
    decodeJSON: typeof decode;
};
export default _default;
