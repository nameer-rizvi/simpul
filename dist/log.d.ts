interface LogGeneratorOptions {
    log?: any;
    ignoreStringifiedNumber?: boolean;
    ignoreKeyPrefix?: boolean;
    key?: string;
    ignoreDots?: boolean;
    self?: Array<any>;
    emoji?: string;
    ignoreNonCriticalLogs?: boolean;
    isCritical?: boolean;
    flags?: string[];
    flag?: string;
    [key: string]: any;
}
interface LogResolverConfig {
    key: string;
    emoji: string;
    ignoreStringifiedNumber?: boolean;
}
declare const logResolver: (customConfigs?: LogResolverConfig[], option?: Partial<LogGeneratorOptions>) => {};
export default logResolver;
