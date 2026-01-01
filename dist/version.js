"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function version(input = []) {
    const normalized = new Map();
    for (const v of input) {
        const tuple = normalize(v);
        if (tuple)
            normalized.set(toString(tuple), tuple);
    }
    const SUPPORTED_VERSIONS = [...normalized.values()]
        .sort(compare)
        .map(toString);
    const SUPPORTED_VERSION_LATEST = SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
    const versionSet = new Set(SUPPORTED_VERSIONS);
    function parse(v, options = {}) {
        const tuple = normalize(v);
        if (!tuple)
            return { isSupported: false };
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
    function isMinVersion(v, min) {
        return parse(v, { min }).isSupported;
    }
    function isMaxVersion(v, max) {
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
function normalize(version) {
    var _a, _b, _c;
    if (!validate_1.default.isString(version))
        return;
    const parts = version.split(".").map(Number).filter(validate_1.default.isNumberValid);
    if (!parts.length)
        return;
    return [(_a = parts[0]) !== null && _a !== void 0 ? _a : 0, (_b = parts[1]) !== null && _b !== void 0 ? _b : 0, (_c = parts[2]) !== null && _c !== void 0 ? _c : 0];
}
function toString([a, b, c]) {
    return `${a}.${b}.${c}`;
}
function compare(a, b) {
    return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}
function inRange(v, min, max) {
    if (min && compare(v, min) < 0)
        return false;
    if (max && compare(v, max) > 0)
        return false;
    return true;
}
exports.default = version;
