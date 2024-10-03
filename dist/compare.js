"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
// https://simple.wikipedia.org/wiki/Euclidean_distance
function euclidean(arr1 = [], arr2 = []) {
    const arr1N = math_1.default.normalize(arr1);
    const arr2N = math_1.default.normalize(arr2);
    if (arr1N === undefined || arr2N === undefined)
        return;
    if ((arr1N === null || arr1N === void 0 ? void 0 : arr1N.length) !== (arr2N === null || arr2N === void 0 ? void 0 : arr2N.length))
        return;
    let distance = 0;
    for (let i = 0; i < arr1N.length; i++)
        distance += Math.pow(arr1N[i] - arr2N[i], 2);
    return math_1.default.num(Math.sqrt(distance));
}
// https://simple.wikipedia.org/wiki/Manhattan_distance
function manhattan(arr1 = [], arr2 = []) {
    const arr1N = math_1.default.normalize(arr1);
    const arr2N = math_1.default.normalize(arr2);
    if (arr1N === undefined || arr2N === undefined)
        return;
    if ((arr1N === null || arr1N === void 0 ? void 0 : arr1N.length) !== (arr2N === null || arr2N === void 0 ? void 0 : arr2N.length))
        return;
    let distance = 0;
    for (let i = 0; i < arr1N.length; i++) {
        distance += Math.abs(arr1N[i] - arr2N[i]);
    }
    return math_1.default.num(distance);
}
// https://en.wikipedia.org/wiki/Cosine_similarity
function cosine(arr1 = [], arr2 = []) {
    const arr1N = math_1.default.normalize(arr1);
    const arr2N = math_1.default.normalize(arr2);
    if (arr1N === undefined || arr2N === undefined)
        return;
    if ((arr1N === null || arr1N === void 0 ? void 0 : arr1N.length) !== (arr2N === null || arr2N === void 0 ? void 0 : arr2N.length))
        return;
    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;
    for (let i = 0; i < arr1N.length; i++) {
        dotProduct += arr1N[i] * arr2N[i];
        magnitude1 += Math.pow(arr1N[i], 2);
        magnitude2 += Math.pow(arr2N[i], 2);
    }
    const magnitude = Math.sqrt(magnitude1) * Math.sqrt(magnitude2);
    return math_1.default.num(dotProduct / magnitude);
}
// https://en.wikipedia.org/wiki/Pearson_correlation_coefficient
function pearson(arr1 = [], arr2 = []) {
    const arr1N = math_1.default.normalize(arr1);
    const arr2N = math_1.default.normalize(arr2);
    if (arr1N === undefined || arr2N === undefined)
        return;
    if ((arr1N === null || arr1N === void 0 ? void 0 : arr1N.length) !== (arr2N === null || arr2N === void 0 ? void 0 : arr2N.length))
        return;
    const n = arr1.length;
    if (n === 0)
        return 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum1Sq = 0;
    let sum2Sq = 0;
    let pSum = 0;
    for (let i = 0; i < n; i++) {
        const n1 = arr1[i];
        const n2 = arr2[i];
        sum1 += n1;
        sum2 += n2;
        sum1Sq += Math.pow(n1, 2);
        sum2Sq += Math.pow(n2, 2);
        pSum += n1 * n2;
    }
    const num = pSum - (sum1 * sum2) / n;
    const den1 = sum1Sq - Math.pow(sum1, 2) / n;
    const den2 = sum2Sq - Math.pow(sum2, 2) / n;
    const denominator = Math.sqrt(den1 * den2);
    if (denominator === 0)
        return 0;
    return math_1.default.num(num / denominator);
}
exports.default = { euclidean, manhattan, cosine, pearson };
