"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate = __importStar(require("./validate"));
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
        if (validate.isString(v)) {
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
