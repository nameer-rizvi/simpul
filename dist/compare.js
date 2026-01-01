"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
// https://en.wikipedia.org/wiki/Euclidean_distance
function euclidean(input1, input2) {
    const a = math_1.default.normalize(input1);
    const b = math_1.default.normalize(input2);
    if (!a || !b || a.length !== b.length)
        return;
    let sum = 0;
    for (let i = 0, len = a.length; i < len; i++) {
        const d = a[i] - b[i];
        sum += d * d;
    }
    return math_1.default.num(Math.sqrt(sum));
}
// https://en.wikipedia.org/wiki/Manhattan_distance
function manhattan(input1, input2) {
    const a = math_1.default.normalize(input1);
    const b = math_1.default.normalize(input2);
    if (!a || !b || a.length !== b.length)
        return;
    let sum = 0;
    for (let i = 0, len = a.length; i < len; i++)
        sum += Math.abs(a[i] - b[i]);
    return math_1.default.num(sum);
}
// https://en.wikipedia.org/wiki/Cosine_similarity
function cosine(input1, input2) {
    const a = math_1.default.normalize(input1);
    const b = math_1.default.normalize(input2);
    if (!a || !b || a.length !== b.length)
        return;
    let dot = 0;
    let magA = 0;
    let magB = 0;
    for (let i = 0, len = a.length; i < len; i++) {
        const x = a[i];
        const y = b[i];
        dot += x * y;
        magA += x * x;
        magB += y * y;
    }
    return math_1.default.num(dot / Math.sqrt(magA * magB));
}
// https://en.wikipedia.org/wiki/Pearson_correlation_coefficient
function pearson(input1, input2) {
    const a = math_1.default.normalize(input1);
    const b = math_1.default.normalize(input2);
    if (!a || !b || a.length !== b.length)
        return;
    const n = input1.length;
    let sum1 = 0;
    let sum2 = 0;
    let sum1Sq = 0;
    let sum2Sq = 0;
    let pSum = 0;
    for (let i = 0; i < n; i++) {
        const x = input1[i];
        const y = input2[i];
        sum1 += x;
        sum2 += y;
        sum1Sq += x * x;
        sum2Sq += y * y;
        pSum += x * y;
    }
    const numerator = pSum - (sum1 * sum2) / n;
    const denominator = Math.sqrt((sum1Sq - (sum1 * sum1) / n) * (sum2Sq - (sum2 * sum2) / n));
    if (denominator === 0)
        return 0;
    return math_1.default.num(numerator / denominator);
}
exports.default = { euclidean, manhattan, cosine, pearson };
