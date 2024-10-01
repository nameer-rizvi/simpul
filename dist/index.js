"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abbreviationToNumber_1 = __importDefault(require("./abbreviationToNumber"));
const applyValueToNumber_1 = __importDefault(require("./applyValueToNumber"));
const base64_1 = __importDefault(require("./base64"));
const batchify_1 = __importDefault(require("./batchify"));
const capitalize_1 = __importDefault(require("./capitalize"));
const changecase_1 = __importDefault(require("./changecase"));
const changeindex_1 = __importDefault(require("./changeindex"));
const cleanstring_1 = __importDefault(require("./cleanstring"));
const clone_1 = __importDefault(require("./clone"));
const clonedeep_1 = __importDefault(require("./clonedeep"));
const jwt_1 = __importDefault(require("./jwt"));
const math_1 = __importDefault(require("./math"));
const trim_1 = __importDefault(require("./trim"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign({ abbreviationToNumber: abbreviationToNumber_1.default,
    applyValueToNumber: applyValueToNumber_1.default,
    base64: base64_1.default,
    batchify: batchify_1.default,
    capitalize: capitalize_1.default,
    changecase: changecase_1.default,
    changeindex: changeindex_1.default,
    cleanstring: cleanstring_1.default,
    clone: clone_1.default,
    clonedeep: clonedeep_1.default,
    jwt: jwt_1.default,
    math: math_1.default,
    trim: trim_1.default }, validate_1.default);
exports.default = simpul;
