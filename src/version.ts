import validate from "./validate";

type VersionTuple = readonly [number, number, number];

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

function version(input: string[] = []) {
  const normalized = new Map<string, VersionTuple>();

  for (const v of input) {
    const tuple = normalize(v);
    if (tuple) normalized.set(toString(tuple), tuple);
  }

  const SUPPORTED_VERSIONS = [...normalized.values()]
    .sort(compare)
    .map(toString);

  const SUPPORTED_VERSION_LATEST =
    SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];

  const versionSet = new Set(SUPPORTED_VERSIONS);

  function parse(v: string, options: VersionOptions = {}): VersionResult {
    const tuple = normalize(v);
    if (!tuple) return { isSupported: false };
    const min = options.min ? normalize(options.min) : undefined;
    const max = options.max ? normalize(options.max) : undefined;
    const string = toString(tuple);
    const isSupported = versionSet.has(string) && inRange(tuple, min, max);
    return {
      isSupported,
      string,
      major: tuple[0],
      minor: tuple[1],
      patch: tuple[2],
    };
  }

  function isMinVersion(v: string, min: string): boolean {
    return parse(v, { min }).isSupported;
  }

  function isMaxVersion(v: string, max: string): boolean {
    return parse(v, { max }).isSupported;
  }

  return {
    SUPPORTED_VERSIONS,
    SUPPORTED_VERSION_LATEST,
    parse,
    isMinVersion,
    isMaxVersion,
  };
}

function normalize(version: string): VersionTuple | undefined {
  if (!validate.isString(version)) return;
  const parts = version.split(".").map(Number).filter(validate.isNumberValid);
  if (!parts.length) return;
  return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
}

function toString([a, b, c]: VersionTuple): string {
  return `${a}.${b}.${c}`;
}

function compare(a: VersionTuple, b: VersionTuple): number {
  return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

function inRange(v: VersionTuple, min?: VersionTuple, max?: VersionTuple) {
  if (min && compare(v, min) < 0) return false;
  if (max && compare(v, max) > 0) return false;
  return true;
}

export default version;
