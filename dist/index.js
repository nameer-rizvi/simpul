"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const abbreviationToNumber_1 = __importDefault(require("./abbreviationToNumber"));
const applyValueToNumber_1 = __importDefault(require("./applyValueToNumber"));
const base64_1 = __importDefault(require("./base64"));
const batchify_1 = __importDefault(require("./batchify"));
const capitalize_1 = __importDefault(require("./capitalize"));
const changecase_1 = __importDefault(require("./changecase"));
const changeIndex_1 = __importDefault(require("./changeIndex"));
const cleanString_1 = __importDefault(require("./cleanString"));
const clone_1 = __importDefault(require("./clone"));
const clonedeep_1 = __importDefault(require("./clonedeep"));
const compare_1 = __importDefault(require("./compare"));
const copyText_1 = __importDefault(require("./copyText"));
const countLabel_1 = __importDefault(require("./countLabel"));
const date_1 = __importDefault(require("./date"));
const dateString_1 = __importDefault(require("./dateString"));
const delay_1 = __importDefault(require("./delay"));
const delimiter_1 = __importDefault(require("./delimiter"));
const delimiterSplit_1 = __importDefault(require("./delimiterSplit"));
const endsWith_1 = __importDefault(require("./endsWith"));
const escaper_1 = __importDefault(require("./escaper"));
const evaluateSeries_1 = __importDefault(require("./evaluateSeries"));
const flatten_1 = __importDefault(require("./flatten"));
const generalCount_1 = __importDefault(require("./generalCount"));
const jwt_1 = __importDefault(require("./jwt"));
const keyChange_1 = __importDefault(require("./keyChange"));
const listify_1 = __importDefault(require("./listify"));
const logProgress_1 = __importDefault(require("./logProgress"));
const math_1 = __importDefault(require("./math"));
const noop_1 = __importDefault(require("./noop"));
const numberString_1 = __importDefault(require("./numberString"));
const objectKeyGroup_1 = __importDefault(require("./objectKeyGroup"));
const ordinalized_1 = __importDefault(require("./ordinalized"));
const paginationProps_1 = __importDefault(require("./paginationProps"));
const parseCommafiedNumber_1 = __importDefault(require("./parseCommafiedNumber"));
const parseJson_1 = __importDefault(require("./parseJson"));
const recursively_1 = __importDefault(require("./recursively"));
const reduceObject_1 = __importDefault(require("./reduceObject"));
const removeArrayItems_1 = __importDefault(require("./removeArrayItems"));
const removeNullValues_1 = __importDefault(require("./removeNullValues"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
const removeStrings_1 = __importDefault(require("./removeStrings"));
const replaceStrings_1 = __importDefault(require("./replaceStrings"));
const rescale_1 = __importDefault(require("./rescale"));
const shuffle_1 = __importDefault(require("./shuffle"));
const slug_1 = __importDefault(require("./slug"));
const sortN_1 = __importDefault(require("./sortN"));
const stringLength_1 = __importDefault(require("./stringLength"));
const stringNumber_1 = __importDefault(require("./stringNumber"));
const stringTest_1 = __importDefault(require("./stringTest"));
const tokenize_1 = __importDefault(require("./tokenize"));
const trim_1 = __importDefault(require("./trim"));
const trimBoundary_1 = __importDefault(require("./trimBoundary"));
const trimPunctuation_1 = __importDefault(require("./trimPunctuation"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign(Object.assign({ abbreviationToNumber: abbreviationToNumber_1.default,
    applyValueToNumber: applyValueToNumber_1.default,
    base64: base64_1.default,
    batchify: batchify_1.default,
    capitalize: capitalize_1.default,
    changecase: changecase_1.default,
    changeIndex: changeIndex_1.default,
    cleanString: cleanString_1.default,
    clone: clone_1.default,
    clonedeep: clonedeep_1.default,
    compare: compare_1.default,
    copyText: copyText_1.default,
    countLabel: countLabel_1.default,
    date: date_1.default,
    dateString: dateString_1.default,
    delay: delay_1.default,
    delimiter: delimiter_1.default,
    delimiterSplit: delimiterSplit_1.default,
    endsWith: endsWith_1.default,
    escaper: escaper_1.default,
    evaluateSeries: evaluateSeries_1.default,
    flatten: flatten_1.default,
    generalCount: generalCount_1.default }, validate_1.default), { // "is.."
    jwt: // "is.."
    jwt_1.default,
    keyChange: keyChange_1.default,
    listify: listify_1.default,
    logProgress: logProgress_1.default,
    math: math_1.default,
    noop: noop_1.default,
    numberString: numberString_1.default,
    objectKeyGroup: objectKeyGroup_1.default,
    ordinalized: ordinalized_1.default,
    paginationProps: paginationProps_1.default,
    parseCommafiedNumber: parseCommafiedNumber_1.default,
    parseJson: parseJson_1.default,
    recursively: recursively_1.default,
    reduceObject: reduceObject_1.default,
    removeArrayItems: removeArrayItems_1.default,
    removeNullValues: removeNullValues_1.default,
    removePunctuation: removePunctuation_1.default,
    removeStrings: removeStrings_1.default,
    replaceStrings: replaceStrings_1.default,
    rescale: rescale_1.default,
    shuffle: shuffle_1.default,
    slug: slug_1.default,
    sortN: sortN_1.default,
    stringLength: stringLength_1.default,
    stringNumber: stringNumber_1.default,
    stringTest: stringTest_1.default,
    tokenize: tokenize_1.default,
    trim: trim_1.default,
    trimBoundary: trimBoundary_1.default,
    trimPunctuation: trimPunctuation_1.default });
module.exports = simpul;
