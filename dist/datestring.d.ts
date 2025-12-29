import { DateType } from "./date";
interface DatestringOptions {
    military?: boolean;
}
declare function datestring(input?: DateType, format?: string, options?: DatestringOptions): string;
export default datestring;
