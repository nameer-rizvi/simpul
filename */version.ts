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
  let SUPPORTED_VERSIONS = versions.map(formatter).filter(Boolean);

  SUPPORTED_VERSIONS = [...new Set(SUPPORTED_VERSIONS)];

  SUPPORTED_VERSIONS.sort(sorter);

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
      const parts = v.split(".").filter(validate.isNumber).slice(0, 3);
      result.major = +parts[0];
      result.minor = +parts[1];
      result.patch = +parts[2];
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

function formatter(v: string) {
  const parts = v.split(".");
  const strings = parts.map((part) => Number(part).toString());
  const numbers = strings.filter(validate.isNumber);
  if (!numbers.length) return;
  while (numbers.length < 3) numbers.push("0");
  return numbers.slice(0, 3).join(".");
}

function sorter(a: string = "", b: string = ""): number {
  const aParts = a.split(".").map(Number);
  const bParts = b.split(".").map(Number);
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] || 0;
    const bPart = bParts[i] || 0;
    if (aPart !== bPart) return aPart - bPart;
  }
  return 0;
}

export default version;
