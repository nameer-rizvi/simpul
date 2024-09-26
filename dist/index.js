"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("./jwt"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
const support_1 = __importDefault(require("./support"));
const trim_1 = __importDefault(require("./trim"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
const tryasync_1 = __importDefault(require("./tryasync"));
const trycallback_1 = __importDefault(require("./trycallback"));
const uid_1 = __importDefault(require("./uid"));
const urlBase64ToUint8Array_1 = __importDefault(require("./urlBase64ToUint8Array"));
const version_1 = __importDefault(require("./version"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign({ jwt: jwt_1.default,
    removePunctuation: removePunctuation_1.default,
    support: support_1.default,
    trim: trim_1.default,
    trimPunctuation: trimPunctuation_1.default,
    tryasync: tryasync_1.default,
    trycallback: trycallback_1.default,
    uid: uid_1.default,
    urlBase64ToUint8Array: urlBase64ToUint8Array_1.default,
    version: version_1.default }, validate_1.default);
exports.default = simpul;
