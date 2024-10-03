interface DatestringOptions {
    military?: boolean;
}
declare function datestring(date?: Date | string, format?: string, option?: DatestringOptions): string;
export default datestring;
