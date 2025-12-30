import { DateType } from "./date";
interface DateStringOptions {
    military?: boolean;
}
declare function dateString(input?: DateType, format?: string, options?: DateStringOptions): string;
export default dateString;
