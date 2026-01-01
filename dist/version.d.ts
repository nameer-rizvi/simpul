interface VersionOptions {
    min?: string;
    max?: string;
}
type VersionResult = {
    isSupported: boolean;
    string?: string;
    major?: number;
    minor?: number;
    patch?: number;
};
declare function version(input?: string[]): {
    SUPPORTED_VERSIONS: string[];
    SUPPORTED_VERSION_LATEST: string;
    parse: (v: string, options?: VersionOptions) => VersionResult;
    isMinVersion: (v: string, min: string) => boolean;
    isMaxVersion: (v: string, max: string) => boolean;
};
export default version;
