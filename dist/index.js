"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanstring_1 = __importDefault(require("./cleanstring"));
const datestring_1 = __importDefault(require("./datestring"));
const jwt_1 = __importDefault(require("./jwt"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
const slug_1 = __importDefault(require("./slug"));
const stringlength_1 = __importDefault(require("./stringlength"));
const stringnumber_1 = __importDefault(require("./stringnumber"));
const stringtest_1 = __importDefault(require("./stringtest"));
const support_1 = __importDefault(require("./support"));
const timenvlog_1 = __importDefault(require("./timenvlog"));
const tokenize_1 = __importDefault(require("./tokenize"));
const trim_1 = __importDefault(require("./trim"));
const trimBoundary_1 = __importDefault(require("./trimBoundary"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
const tryasync_1 = __importDefault(require("./tryasync"));
const trycallback_1 = __importDefault(require("./trycallback"));
const uid_1 = __importDefault(require("./uid"));
const urlBase64ToUint8Array_1 = __importDefault(require("./urlBase64ToUint8Array"));
const validate_1 = __importDefault(require("./validate"));
const version_1 = __importDefault(require("./version"));
const simpul = Object.assign({ cleanstring: cleanstring_1.default,
    datestring: datestring_1.default,
    jwt: jwt_1.default,
    removePunctuation: removePunctuation_1.default,
    slug: slug_1.default,
    stringlength: stringlength_1.default,
    stringnumber: stringnumber_1.default,
    stringtest: stringtest_1.default,
    support: support_1.default,
    timenvlog: timenvlog_1.default,
    tokenize: tokenize_1.default,
    trim: trim_1.default,
    trimBoundary: trimBoundary_1.default,
    trimPunctuation: trimPunctuation_1.default,
    tryasync: tryasync_1.default,
    trycallback: trycallback_1.default,
    uid: uid_1.default,
    urlBase64ToUint8Array: urlBase64ToUint8Array_1.default,
    version: version_1.default }, validate_1.default);
exports.default = simpul;
