import validate from "./validate";

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

function version(versions: string[] = []) {
  const SUPPORTED_VERSIONS = versions.sort();

  const SUPPORTED_VERSION_LATEST =
    SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];

  function isMaxVersion(v: string, m: string): boolean {
    return parse(v, { max: m }).isSupported;
  }

  function isMinVersion(v: string, m: string): boolean {
    return parse(v, { min: m }).isSupported;
  }

  function parse(v: string, o: VersionOptions = {}): VersionResult {
    const result: VersionResult = { isSupported: false };

    if (validate.isString(v)) {
      result.string = v;

      const splits = v.split(".").filter(Boolean);

      result.major = +splits[0];

      result.minor = +splits[1];

      result.patch = +splits[2];

      let sliceMin = SUPPORTED_VERSIONS.findIndex((i) => i === o.min);

      if (sliceMin === -1) sliceMin = 0;

      let sliceMax = SUPPORTED_VERSIONS.findIndex((i) => i === o.max);

      if (sliceMax === -1) {
        sliceMax = SUPPORTED_VERSIONS.length;
      } else {
        sliceMax++;
      }

      const supportedVersions = SUPPORTED_VERSIONS.slice(sliceMin, sliceMax);

      result.isSupported = supportedVersions.includes(v);
    }

    return result;
  }

  return {
    SUPPORTED_VERSIONS,
    SUPPORTED_VERSION_LATEST,
    parse,
    isMaxVersion,
    isMinVersion,
  };
}

export default version;
