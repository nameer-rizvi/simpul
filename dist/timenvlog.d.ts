interface TimenvlogOptions {
    ignoreTimestamp?: boolean;
    ignoreEnvironment?: boolean;
    date?: Date | string;
    date_format?: string;
    date_option?: object;
}
declare function timenvlog(log: any, option?: TimenvlogOptions): void;
export default timenvlog;
