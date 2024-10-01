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
const compare_1 = __importDefault(require("./compare"));
const copytext_1 = __importDefault(require("./copytext"));
const countlabel_1 = __importDefault(require("./countlabel"));
const date_1 = __importDefault(require("./date"));
const datestring_1 = __importDefault(require("./datestring"));
const delay_1 = __importDefault(require("./delay"));
const delimiter_1 = __importDefault(require("./delimiter"));
const delimitersplit_1 = __importDefault(require("./delimitersplit"));
const endswith_1 = __importDefault(require("./endswith"));
const escaper_1 = __importDefault(require("./escaper"));
const flatten_1 = __importDefault(require("./flatten"));
const generalcount_1 = __importDefault(require("./generalcount"));
const isEnv_1 = __importDefault(require("./isEnv"));
const jwt_1 = __importDefault(require("./jwt"));
const keychange_1 = __importDefault(require("./keychange"));
const log_1 = __importDefault(require("./log"));
const logPermutation_1 = __importDefault(require("./logPermutation"));
const math_1 = __importDefault(require("./math"));
const noop_1 = __importDefault(require("./noop"));
const numberstring_1 = __importDefault(require("./numberstring"));
const objectKeyGroup_1 = __importDefault(require("./objectKeyGroup"));
const ordinalized_1 = __importDefault(require("./ordinalized"));
const paginationProps_1 = __importDefault(require("./paginationProps"));
const parseCommafiedNumber_1 = __importDefault(require("./parseCommafiedNumber"));
const parsejson_1 = __importDefault(require("./parsejson"));
const peaks_1 = __importDefault(require("./peaks"));
const recursively_1 = __importDefault(require("./recursively"));
const reduceobject_1 = __importDefault(require("./reduceobject"));
const removeArrayItems_1 = __importDefault(require("./removeArrayItems"));
const removeNullValues_1 = __importDefault(require("./removeNullValues"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
const removeStrings_1 = __importDefault(require("./removeStrings"));
const replaceStrings_1 = __importDefault(require("./replaceStrings"));
const scale_1 = __importDefault(require("./scale"));
const shuffle_1 = __importDefault(require("./shuffle"));
const slug_1 = __importDefault(require("./slug"));
const stringlength_1 = __importDefault(require("./stringlength"));
const stringnumber_1 = __importDefault(require("./stringnumber"));
const stringtest_1 = __importDefault(require("./stringtest"));
const support_1 = __importDefault(require("./support"));
const timenvlog_1 = __importDefault(require("./timenvlog"));
const trim_1 = __importDefault(require("./trim"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
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
    compare: compare_1.default,
    copytext: copytext_1.default,
    countlabel: countlabel_1.default,
    date: date_1.default,
    datestring: datestring_1.default,
    delay: delay_1.default,
    delimiter: delimiter_1.default,
    delimitersplit: delimitersplit_1.default,
    endswith: endswith_1.default,
    escaper: escaper_1.default,
    flatten: flatten_1.default,
    generalcount: generalcount_1.default,
    isEnv: isEnv_1.default,
    jwt: jwt_1.default,
    keychange: keychange_1.default,
    log: log_1.default,
    logPermutation: logPermutation_1.default,
    math: math_1.default,
    noop: noop_1.default,
    numberstring: numberstring_1.default,
    objectKeyGroup: objectKeyGroup_1.default,
    ordinalized: ordinalized_1.default,
    paginationProps: paginationProps_1.default,
    parseCommafiedNumber: parseCommafiedNumber_1.default,
    parsejson: parsejson_1.default,
    peaks: peaks_1.default,
    recursively: recursively_1.default,
    reduceobject: reduceobject_1.default,
    removeArrayItems: removeArrayItems_1.default,
    removeNullValues: removeNullValues_1.default,
    removePunctuation: removePunctuation_1.default,
    removeStrings: removeStrings_1.default,
    replaceStrings: replaceStrings_1.default,
    scale: scale_1.default,
    shuffle: shuffle_1.default,
    slug: slug_1.default,
    stringlength: stringlength_1.default,
    stringnumber: stringnumber_1.default,
    stringtest: stringtest_1.default,
    support: support_1.default,
    timenvlog: timenvlog_1.default,
    trim: trim_1.default,
    trimPunctuation: trimPunctuation_1.default }, validate_1.default);
exports.default = simpul;
