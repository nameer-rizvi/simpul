type VersionResult = {
    isSupported: boolean;
    string?: string;
    major?: number;
    minor?: number;
    patch?: number;
};
interface VersionOptions {
    min?: string;
    max?: string;
}
declare function version(versions?: string[]): {
    SUPPORTED_VERSIONS: (string | undefined)[];
    SUPPORTED_VERSION_LATEST: string | undefined;
    parse: (v: string, o?: VersionOptions) => VersionResult;
    isMaxVersion: (v: string, m: string) => boolean;
    isMinVersion: (v: string, m: string) => boolean;
};
export default version;
