"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function version(versions = []) {
    const SUPPORTED_VERSIONS = versions.sort();
    const SUPPORTED_VERSION_LATEST = SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
    function isMaxVersion(v, m) {
        return parse(v, { max: m }).isSupported;
    }
    function isMinVersion(v, m) {
        return parse(v, { min: m }).isSupported;
    }
    function parse(v, o = {}) {
        const result = { isSupported: false };
        if (validate_1.default.isString(v)) {
            result.string = v;
            const splits = v.split(".").filter(Boolean);
            result.major = +splits[0];
            result.minor = +splits[1];
            result.patch = +splits[2];
            let sliceMin = SUPPORTED_VERSIONS.findIndex((i) => i === o.min);
            if (sliceMin === -1)
                sliceMin = 0;
            let sliceMax = SUPPORTED_VERSIONS.findIndex((i) => i === o.max);
            if (sliceMax === -1) {
                sliceMax = SUPPORTED_VERSIONS.length;
            }
            else {
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
exports.default = version;
